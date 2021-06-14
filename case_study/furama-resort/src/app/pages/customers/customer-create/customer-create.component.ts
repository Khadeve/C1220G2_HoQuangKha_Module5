import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  dateOfBirth: string = '';
  
  constructor( private customerService: CustomerService, private router: Router, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl(''),
      dateOfBirth: new FormControl(''),
      gender: new FormControl(''),
      idCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})$')),
      phoneNumber: new FormControl('', Validators.pattern('^(090|091)\\d{7}$')),
      email: new FormControl('', Validators.email),
      address: new FormControl(''),
      customerType: new FormControl('member')
    });
  }

  onSubmit(): void {
    this.customer = Object.assign({}, this.customerForm.value);
    this.customer.dateOfBirth = this.dateOfBirth;

    this.customerService.addNewCustomer(this.customer).subscribe(
      () => {
        this.snackBar.open("Create successfully", '', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.customerService.filter('Register customer'); //trigger an event when register customer.
        this.router.navigateByUrl('/customer/list');
      },
      error => console.error("Add customer: " + error),
      () => console.log("Add customer completely")
    );
  }

  pickDateOfBirth(value: string): void {
    this.dateOfBirth = value;
  }
}
