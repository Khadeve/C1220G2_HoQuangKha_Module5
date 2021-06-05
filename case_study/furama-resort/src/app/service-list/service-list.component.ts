import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceList: Array<Service> = [];
  page: number = 1;
  totalServices: number = this.serviceList.length;

  constructor() { }

  ngOnInit(): void {
  }

}
