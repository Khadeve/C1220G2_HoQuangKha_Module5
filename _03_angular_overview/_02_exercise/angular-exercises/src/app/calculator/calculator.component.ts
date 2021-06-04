import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  dis(event: any): void {
    this.value += event.target.value;
  }

  cls(): void {
    this.value = '';
  }

  solve(): void {
    this.value = eval(this.value);
  }
}
