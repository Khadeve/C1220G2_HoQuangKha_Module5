import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  totalCustomers: number;
  page: number = 1;
  pageSize: number = 3;

  openDeleleConfirm: string = "no";

  constructor(private customerService: CustomerService) {
    let customerObservable: Observable<Customer[]> = this.customerService.onGet();

    customerObservable.subscribe(
      (customers: Customer[]) => {
        this.customerList = customers;
        this.totalCustomers = this.customerList.length;
      },
      error => console.error('Get customers: ' + error),
      () => console.log("Get customers completely!")
    );
  }

  ngOnInit(): void {}

  openDeleteConfirmModal() {
    this.openDeleleConfirm = 'yes';
  }
}
