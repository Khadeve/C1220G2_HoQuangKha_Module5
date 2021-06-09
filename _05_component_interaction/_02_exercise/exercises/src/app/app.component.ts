import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'exercises';
  parentValue: number;

  ngOnInit(): void {
    this.parentValue = 0;
  }

  setParentValue(event: Event): void {
    this.parentValue = +(event.target as HTMLInputElement).value;
  }
}
