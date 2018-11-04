import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WordDefinitionService {
    constructor(private http: HttpClient) {}

    public getWordDetails(word: string, sucess: (definition: WordDefinition) => void, error?: (err) => void) {
        this.http.get('https://googledictionaryapi.eu-gb.mybluemix.net', { params: { define: word, lang: 'en' } }).subscribe(
            (res: WordDefinition) => {
                console.log(res);
                sucess(res);
            },
            err => {
                console.log(err);
                if (error) error(err);
            }
        );
    }
}

export class WordDefinition {
    word: string;
    phonetic: string[];
    meaning: {
        'determiner & pronoun': { definition: string; example: string }[];
        adjective: { definition: string; example: string }[];
        adverb: { definition: string; example: string }[];
        noun: { definition: string; example: string }[];
    };
}
