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
  deleteCusId: string = '';
  deleteCusName: string = '';

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
        res.forEach(customer => {
          let lengthId: number = customer.id.toString().length;
          let zeroDigits: string = '';
          for (let i = 1; i <= 4 - lengthId; i++) {
            zeroDigits += 0;
          }
          customer.id = "KH-" + zeroDigits + customer.id;
        })
        this.customerList = res;
        this.totalCustomers = this.customerList.length;
      }
    );
  }

  assignDeleteCusId(id: string) {
    id = id.slice(3);
    this.deleteCusId = id;
    this.customerService.findById(id).subscribe(
      cus => {
        this.deleteCusName = cus.name;
      }
    )
  }

  onDelete(): void {
    this.customerService.deleteCustomer(this.deleteCusId).subscribe(
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
