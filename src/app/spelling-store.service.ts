import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import Dexie from 'dexie';

@Injectable({
    providedIn: 'root'
})
export class SpellingStoreService {
    db = new WordDatabase();

    constructor(private snackBarService: MatSnackBar) {
        this.db.open().catch(err => {
            console.error(`Open failed: ${err.stack}`);
        });
    }

    public saveWord(wordDefinition: SavedWordDefinition, successCallback: () => void, errorCallback: (err) => void) {
        this.db.words
            .add(wordDefinition)
            .then(() => {
                successCallback();
            })
            .catch(err => {
                errorCallback(err);
            });

        const arr = this.db.words.each(def => {
            console.log(def);
        });
    }

    public getPracticeWords(successCallback: (words: SavedWordDefinition[]) => void) {
        // TODO: only get the words that should be practiced for the current day

        this.db.words
            .toArray()
            .then(res => {
                successCallback(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    public checkSpelling(wordDefinition: SavedWordDefinition, attemptedSpelling: string) {
        let isCorrect = attemptedSpelling === wordDefinition.word || attemptedSpelling.toLowerCase() === wordDefinition.word.toLowerCase();

        if (isCorrect) {
            this.snackBarService.open('✅ Correct!');
        } else {
            this.snackBarService.open(`❌ Sorry, that's not right`);
        }

        this.db.attempts.add({
            date: new Date(),
            word: wordDefinition.word,
            isCorrect: isCorrect
        });
    }
}

class WordDatabase extends Dexie {
    words: Dexie.Table<SavedWordDefinition, string>;
    attempts: Dexie.Table<Attempt, string>;

    constructor() {
        super('WordDatabase');
        this.version(1).stores({
            words: 'word, definition, pronunciation',
            attempts: '[date+word], isCorrect'
        });
    }
}

export class SavedWordDefinition {
    word: string;
    definition: string;
    pronunciation: string;
}

export class Attempt {
    date: Date;
    word: string;
    isCorrect: boolean;
}
