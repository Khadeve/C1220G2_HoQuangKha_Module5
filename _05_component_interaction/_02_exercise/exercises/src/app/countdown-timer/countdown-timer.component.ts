import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input()
  value: number;

  tempValue: number;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startCountDown(): void {
    this.tempValue = this.value;
    this.interval = setInterval(() => {
      this.value--;
      if (this.value === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stopCountDown(): void {
    clearInterval(this.interval);
  }

  reset(): void {
    clearInterval(this.interval);
    this.value = this.tempValue;
  }
}
