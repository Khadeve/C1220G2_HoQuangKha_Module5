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
    {id: 'KH-03', name: "Quoc Tuan", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "quoctuan@gmail.com", address: "Quang Tri", customerType: "silver"},
    {id: 'KH-04', name: "Quoc Tu", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "quoctuan@gmail.com", address: "Quang Tri", customerType: "silver"}
  ];

  page: number = 1;
  totalCustomers: number = this.customerList.length;

  constructor() { }

  ngOnInit(): void {
  }

  searchByName(event: Event): void {
    let keyword: string = (event.target as HTMLInputElement).value;
    let customerArr: Array<Customer> = [];

    this.customerList = [
      {id: 'KH-01', name: "Nguyen Huy", dateOfBirth: "23/01/1992", gender: "male", idCard: "123456789", phoneNumber: "0911111111", email: "nguyenhuy@gmail.com", address: "Da Nang", customerType: "gold"},
      {id: 'KH-02', name: "Thanh Cong", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "thanhcong@gmail.com", address: "Da Nang", customerType: "member"},
      {id: 'KH-03', name: "Quoc Tuan", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "quoctuan@gmail.com", address: "Quang Tri", customerType: "silver"},
      {id: 'KH-04', name: "Quoc Tu", dateOfBirth: "23/02/1992", gender: "female", idCard: "123456787", phoneNumber: "0911111112", email: "quoctuan@gmail.com", address: "Quang Tri", customerType: "silver"}
    ];
    this.totalCustomers = this.customerList.length;

    for (const customer of this.customerList) {
      if (customer.name.toLowerCase().search(keyword.toLowerCase()) !== -1) {
        customerArr.push(customer);
      }
    }
    this.customerList = customerArr;
    this.totalCustomers = this.customerList.length;
  }
}
