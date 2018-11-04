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
        wordDefinition.correctStreak = 0;

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

        // - from config get intervals for correct streaks
        // - hard code for now

        // get
        //  - list of all words
        //  - last practiced date
        //  - correct streak

        // display word if ( (current_date - last_practice_date) >= practice_interval )

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
        const isCorrect =
            attemptedSpelling === wordDefinition.word || attemptedSpelling.toLowerCase() === wordDefinition.word.toLowerCase();
        const attemptTime = new Date();

        if (isCorrect) {
            this.snackBarService.open('✅ Correct!');
        } else {
            this.snackBarService.open(`❌ Sorry, that's not right`);
        }

        this.db.attempts.add({
            date: attemptTime,
            word: wordDefinition.word,
            isCorrect: isCorrect
        });

        this.db.words.update(wordDefinition.word, {
            lastAttempt: attemptTime,
            correctStreak: isCorrect ? wordDefinition.correctStreak + 1 : 0
        });
    }
}

class WordDatabase extends Dexie {
    words: Dexie.Table<SavedWordDefinition, string>;
    attempts: Dexie.Table<Attempt, string>;

    constructor() {
        super('WordDatabase');
        this.version(1).stores({
            words: 'word, definition, pronunciation, correctStreak, lastAttempt',
            attempts: '[date+word], isCorrect'
        });
    }
}

export class SavedWordDefinition {
    word: string;
    definition: string;
    pronunciation: string;
    correctStreak: number;
    lastAttempt: Date;
}

export class Attempt {
    date: Date;
    word: string;
    isCorrect: boolean;
}
