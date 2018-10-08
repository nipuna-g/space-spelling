import { SpellingStoreService } from './../spelling-store.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { WordDefinitionService, WordDefinition } from '../word-definition-service.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {

  public addWordForm = new FormGroup({
    word: new FormControl('', Validators.required),
    pronounciaton: new FormControl('', Validators.required),
    definition: new FormControl(''),
  })

  constructor(private definitionService: WordDefinitionService, private spellingStoreService: SpellingStoreService) { }

  ngOnInit() {
    this.addWordForm.get('word').valueChanges.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      if (!value || value.length < 2) return;
      this.updateWordDetails(value);
    });
  }

  private updateWordDetails(word) {
    this.definitionService.getWordDetails(word, (definition: WordDefinition) => {
      this.addWordForm.get('pronounciaton').setValue(definition.phonetic[0]);
      this.addWordForm.get('definition').setValue(definition.meaning.noun[0].definition);
    });
  }

  public addWord() {
    this.spellingStoreService.saveWord(this.addWordForm.value)
  }
}
