import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../service/date-util.service';

@Component({
  selector: 'app-timelifes',
  templateUrl: './timelifes.component.html',
  styleUrls: ['./timelifes.component.css']
})
export class TimelifesComponent implements OnInit {

  output: string = '';
  constructor(private _dateService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value: any): void {
    this.output = this._dateService.getDiffToNow(value);
  } 
}
