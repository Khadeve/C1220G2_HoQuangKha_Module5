import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorValue: string = '#FF0000';
  redValue: number = 255;
  greenValue: number = 0;
  blueValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getHexFromDec(n: number): string {
    let hex: string = n.toString(16); // convert from decimal to hexadecimal.
    return (hex.length === 1) ? (0 + hex) : hex;  // prepend 0 if there is 1 digit.
  }

  changeColor(): void {
    this.colorValue = '#'  + this.getHexFromDec(this.redValue)
                           + this.getHexFromDec(this.greenValue)
                           + this.getHexFromDec(this.blueValue);
  }
}
