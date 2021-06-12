import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  dateOfBirth: string = '';
  
  constructor( private customerService: CustomerService, private router: Router ) { }

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
      () => console.log("Add customer successfully"),
      error => console.error("Add customer: " + error),
      () => console.log("Add customer completely")
    );
    this.router.navigateByUrl('/customer/list');
  }

  pickDateOfBirth(value: string): void {
    this.dateOfBirth = value;
  }
}
