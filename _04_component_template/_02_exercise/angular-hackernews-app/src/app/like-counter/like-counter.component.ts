import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.css']
})
export class LikeCounterComponent implements OnInit {

  likeCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseLikeCounter(): void {
    this.likeCounter++;
  }

}
