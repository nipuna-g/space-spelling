import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class SpellingStoreService {

  db = new WordDatabase();

  constructor() {
    this.db.open().catch(err => {
      console.error(`Open failed: ${err.stack}`);
    });
  }

  public saveWord(wordDefinition: SavedWordDefinition, successCallback: () => void, errorCallback: (err) => void) {
    this.db.words.add(wordDefinition).then(() => {
        successCallback();
    }).catch((err) => {
        errorCallback(err);
    });

    const arr = this.db.words.each((def) => {
      console.log(def);
    });
  }

  public getPracticeWords(successCallback: (words: SavedWordDefinition[]) => void) {
    // TODO: only get the words that should be practiced for the current day

    this.db.words.toArray().then((res) => {
      successCallback(res);
    }).catch((err) => {
      console.log(err);
    })
  }
}

class WordDatabase extends Dexie {
  words: Dexie.Table<SavedWordDefinition, string>;
  attempts: Dexie.Table<Attempt, string>;

  constructor() {
    super('WordDatabase');
    this.version(1).stores({
      words: 'word, definition, pronunciation',
      attempts: '[date+word], isCorrect',
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