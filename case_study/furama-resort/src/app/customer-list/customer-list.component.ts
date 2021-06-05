import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [
    {id: 'KH-01', name: "Nguyen Huy", dateOfBirth: "23/01/1992", gender: "male", idCard: "123456789", phoneNumber: "0911111111", email: "nguyenhuy@gmail.com", address: "Da Nang", customerType: "gold"},
    {id: 'KH-02', name: "Thanh Cong", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "thanhcong@gmail.com", address: "Da Nang", customerType: "member"},
  ];

  page: number = 1;
  totalCustomers: number = this.customerList.length;

  constructor() { }

  ngOnInit(): void {
  }
}
