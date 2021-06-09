import { Component, OnInit } from '@angular/core';
import { IRatingUnit } from '../model/irating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  ratingUnits: Array<IRatingUnit>;
  ratingScore: number;

  constructor() { }

  ngOnInit(): void {
    this.ratingScore = 0;
    this.ratingUnits = [
      {value: 1, active: false},
      {value: 2, active: false},
      {value: 3, active: false},
      {value: 4, active: false},
      {value: 5, active: false},
      {value: 6, active: false},
      {value: 7, active: false},
      {value: 8, active: false},
      {value: 9, active: false},
      {value: 10, active: false}
    ];
  }

  rate(ratingValue: number): void {
    this.ratingScore = ratingValue;
    this.ratingUnits.forEach(e => {
      e.active = false;
    });
    for (let i = 0; i < ratingValue; i++) {
      this.ratingUnits[i].active = true;
    }
  }

}
