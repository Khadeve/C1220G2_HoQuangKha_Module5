import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Array<Employee> = [
    {id: 'NV-0001', name: "Quang Khang", dateOfBirth: "24/09/2006", idCard: '123456789', salary: 100, phoneNumber: '123', email: 'khang@gmail.com', address: 'Binh Dinh', position: 'manager', division: 'office', education: 'university'},
    {id: 'NV-0002', name: "Duc Sang", dateOfBirth: "24/09/2006", idCard: '123456789', salary: 100, phoneNumber: '123', email: 'khang@gmail.com', address: 'Binh Dinh', position: 'manager', division: 'office', education: 'university'}
  ];
  page: number = 1;
  totalEmployees: number = this.employeeList.length;

  constructor() { }

  ngOnInit(): void {
  }

}
