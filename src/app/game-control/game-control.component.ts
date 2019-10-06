import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalNumber = new EventEmitter<number>();
  num: number = 1;
  incrementInterval;

  constructor() { }

  ngOnInit() {
  }

  starts() {
    this.incrementInterval = setInterval(() => {
      this.intervalNumber.emit(this.num++);
    }, 1000);
  }

  stops() {
    clearInterval(this.incrementInterval);
  }
}