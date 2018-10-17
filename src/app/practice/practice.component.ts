import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  public practiceForm = new FormGroup({
      word: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
    window.speechSynthesis.getVoices();
  }

  speakWord() {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = 'Hello World';
    msg.lang = 'en-US';

    speechSynthesis.speak(msg);
  }
}
