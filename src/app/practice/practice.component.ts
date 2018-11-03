import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SavedWordDefinition, SpellingStoreService } from './../spelling-store.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
    public practiceForm = new FormGroup({
        word: new FormControl('', Validators.required)
    });

    public practiceWords: SavedWordDefinition[] = [];
    public currentQuestionIndex: number = 0;

    public get currentQuestion() {
        return this.practiceWords[this.currentQuestionIndex];
    }

    constructor(
        private spellingStoreService: SpellingStoreService,
        private snackBarService: MatSnackBar,
        private router: Router,
    ) {}

    ngOnInit() {
        window.speechSynthesis.getVoices();

        this.spellingStoreService.getPracticeWords(res => {
            this.practiceWords = res;
            this.currentQuestionIndex = 0;
        });
    }

    speakWord() {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[1];
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 2;
        msg.text = this.currentQuestion.word;
        msg.lang = 'en-US';

        speechSynthesis.speak(msg);
    }

    checkSpelling() {
        const word = this.practiceForm.get('word').value;

        if (
            word === this.currentQuestion.word ||
            word.toLowerCase() === this.currentQuestion.word.toLowerCase()
        ) {
            this.snackBarService.open('✅ Correct!');
        } else {
            this.snackBarService.open(`❌ Sorry, that's not right`);
        }

        if (this.practiceWords.length > (this.currentQuestionIndex + 1)) {
            this.currentQuestionIndex++;
            this.practiceForm.reset();
        } else {
            this.router.navigate(['practice-summary']);
        }
    }
}
