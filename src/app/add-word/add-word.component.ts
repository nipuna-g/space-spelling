import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { WordDefinition, WordDefinitionService } from '../word-definition-service.service';
import { SpellingStoreService } from './../spelling-store.service';

@Component({
    selector: 'app-add-word',
    templateUrl: './add-word.component.html',
    styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
    public definitionLoading = false;
    public wordSuggestion: WordDefinition = null;

    public addWordForm = new FormGroup({
        word: new FormControl('', Validators.required),
        pronunciation: new FormControl('', Validators.required),
        definition: new FormControl('')
    });

    constructor(
        private definitionService: WordDefinitionService,
        private spellingStoreService: SpellingStoreService,
        private snackBarService: MatSnackBar,
        private router: Router
    ) {}

    ngOnInit() {
        this.addWordForm
            .get('word')
            .valueChanges.pipe(debounceTime(200))
            .subscribe(value => {
                if (!value || value.length < 2) {
                    return;
                }

                this.updateWordDetails(value);
            });
    }

    private updateWordDetails(word) {
        this.wordSuggestion = null;
        this.definitionLoading = true;
        this.definitionService.getWordDetails(
            word,
            (definition: WordDefinition) => {
                const typedWord: string = this.addWordForm.get('word').value;

                if (typedWord.toLowerCase() === definition.word) {
                    this.populateWordDefinition(definition);
                } else {
                    this.wordSuggestion = definition;
                }

                this.definitionLoading = false;
            },
            error => {
                console.log(error);
                this.definitionLoading = false;
            }
        );
    }

    private populateWordDefinition(definition: WordDefinition) {
        this.addWordForm.get('pronunciation').setValue(definition.phonetic[0]);

        let meaningKey = Object.keys(definition.meaning)[0];
        let meaning = definition.meaning[meaningKey];
        if (meaning && meaning.length) {
            this.addWordForm.get('definition').setValue(meaning[0].definition);
        }
    }

    public useSuggestion() {
        this.addWordForm.get('word').setValue(this.wordSuggestion.word);
        this.populateWordDefinition(this.wordSuggestion);
    }

    public saveWord() {
        this.spellingStoreService.saveWord(
            this.addWordForm.value,
            () => {
                this.snackBarService.open('Word saved!');
            },
            err => {
                this.snackBarService.open('Failed saving word!');
            }
        );

        this.resetForm();
    }

    public saveWordAndExit() {
        this.saveWord();
        this.router.navigate(['/']);
    }

    public resetForm() {
        this.addWordForm.reset();
    }
}
