import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'start-canvas',
  templateUrl: './start-canvas.component.html',
  styleUrls: ['./start-canvas.component.scss']
})
export class StartCanvasComponent implements OnInit {
  private canvas;
  private context;
  private screenH;
  private screenW;
  private stars = [];
  private fps = 50;
  private numStars = 50;

  constructor() { }

  @ViewChild('spaceCanvas') canvasElement: ElementRef;

  ngOnInit() {
    // Calculate the screen size
    this.screenH = this.canvasElement.nativeElement.clientHeight;
    this.screenW = this.canvasElement.nativeElement.clientWidth;

    // Fill out the canvas
    this.canvasElement.nativeElement.setAttribute('height', this.screenH);
    this.canvasElement.nativeElement.setAttribute('width', this.screenW);
    this.context = this.canvasElement.nativeElement.getContext('2d');

    // Create all the stars
    for (var i = 0; i < this.numStars; i++) {
      var x = Math.round(Math.random() * this.screenW);
      var y = Math.round(Math.random() * this.screenH);
      var length = 1 + Math.random() * 2;
      var opacity = Math.random();

      // Create a new star and draw
      var star = new Star(x, y, length, opacity, this.screenW, this.screenH);

      // Add the the stars array
      this.stars.push(star);
    }

    setInterval(this.animate.bind(this), 1000 / this.fps);
  }

  private animate() {
    this.context.clearRect(0, 0, this.screenW, this.screenH);
    this.stars.forEach((star) => {
      star.draw(this.context);
    })
  }
}

export class Star {
  private x: number;
  private y: number;
  private length: number;
  private opacity: number;
  private factor: number;
  private increment: number;
  private screenW: number;
  private screenH: number;

  constructor(x: number, y: number, length: number, opacity: number, screenW: number, screenH: number) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * .03;
    this.screenW = screenW;
    this.screenH = screenH;
  }

  public draw(context) {
    //context.rotate((Math.PI));

    // Save the context
    context.save();

    // move into the middle of the canvas, just to make room
    context.translate(this.x, this.y);

    this.updateOpacity();
    this.drawStarShape(context);
    context.restore();
  }

  private updateOpacity() {
    if (this.opacity > 1) {
      this.factor = -1;
    }
    else if (this.opacity <= 0) {
      this.factor = 1;

      // hidden stars re-appear at different location
      this.x = Math.round(Math.random() * this.screenW);
      this.y = Math.round(Math.random() * this.screenH);
    }

    this.opacity += this.increment * this.factor;
  }

  private drawStarShape(context) {
    context.beginPath()
    for (var i = 5; i--;) {
      context.lineTo(0, this.length);
      context.translate(0, this.length);
      context.rotate((Math.PI * 2 / 10));
      context.lineTo(0, - this.length);
      context.translate(0, - this.length);
      context.rotate(-(Math.PI * 6 / 10));
    }
    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
    context.shadowBlur = 5;
    context.shadowColor = '#ff0000';
    context.fill();
  }
}
