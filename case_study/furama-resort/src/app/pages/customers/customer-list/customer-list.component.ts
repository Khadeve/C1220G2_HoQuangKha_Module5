import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  searchValue: string = '';

  constructor(private customerService: CustomerService, private snackBar: MatSnackBar) {
    this.customerService.listen().subscribe(
      res => {
        console.log(res);
        this.refreshCustomerList();
      }
    )
  }

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  refreshCustomerList(): void {
    this.customerService.onGet().subscribe(
      (res: Customer[]) => {
        this.customerList = res;
        this.totalCustomers = this.customerList.length;
      }
    );
  }

  onDelete(customerId: string): void {
    this.customerService.findById(customerId).subscribe(
      (customer: Customer) => {
        if (confirm("Are you sure to delete " + customer.name + " with ID: " + customerId + "?")) {
          this.customerService.deleteCustomer(customerId).subscribe(
            () => {
              this.refreshCustomerList();
              this.snackBar.open('Delete successfully', '', {
                duration: 3000,
                verticalPosition: 'top'
              })
            }
          )
        }
      }
    )
  }

}
