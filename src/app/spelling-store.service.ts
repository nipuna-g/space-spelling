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

  public saveWord(wordDefinition) {
    wordDefinition.definition;
    wordDefinition.pronounciaton;
    wordDefinition.word;

    this.db.words.add(wordDefinition)

    let arr = this.db.words.each((def) => {
      console.log(def)
    });

    window.localStorage.setItem
  }
}

class WordDatabase extends Dexie {
  words: Dexie.Table<SavedWordDefinition, string>;
  attempts: Dexie.Table<Attempt, string>;

  constructor() {
    super("WordDatabase");
    this.version(1).stores({
      words: 'word, definition, pronounciaton',
      attempts: '[date+word], isCorrect',
    });
  }
}

class SavedWordDefinition {
  word: string;
  definition: string;
  pronounciaton: string;
}

class Attempt {
  date: Date;
  word: string;
  isCorrect: boolean;
}