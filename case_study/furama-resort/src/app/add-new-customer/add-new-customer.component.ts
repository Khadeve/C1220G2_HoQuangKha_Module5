import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
