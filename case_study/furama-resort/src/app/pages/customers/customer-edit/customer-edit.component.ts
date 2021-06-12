import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    idCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})$')),
    phoneNumber: new FormControl('', Validators.pattern('^(090|091)\\d{7}$')),
    email: new FormControl('', Validators.email),
    address: new FormControl(''),
    customerType: new FormControl('')
  });

  id: string;
  customer: Customer = new Customer();
  dateOfBirth: string;
  constructor(private activatedRouter: ActivatedRoute, private customerService: CustomerService, private router: Router){ }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    let customerObservable: Observable<Customer> = this.customerService.findById(this.id);

    // Get customer from customerObservable.
    customerObservable.subscribe(
      (customerServer: Customer) => {
        this.customer = customerServer;
        this.customerForm = new FormGroup({
          id: new FormControl(this.id),
          name: new FormControl(this.customer.name),
          dateOfBirth: new FormControl(this.customer.dateOfBirth),
          gender: new FormControl(this.customer.gender),
          idCard: new FormControl(this.customer.idCard, Validators.pattern('^(\\d{9}|\\d{12})$')),
          phoneNumber: new FormControl(this.customer.phoneNumber, Validators.pattern('^(090|091)\\d{7}$')),
          email: new FormControl(this.customer.email, Validators.email),
          address: new FormControl(this.customer.address),
          customerType: new FormControl(this.customer.customerType)
        });
        this.dateOfBirth = this.customer.dateOfBirth;
      },
      error => console.error('find customer observable fail' + error),
      () => console.log('find customer observable success')
    );
  }

  onSubmit(): void {
    let newCustomer: Customer = Object.assign({}, this.customerForm.value);
    newCustomer.dateOfBirth = this.dateOfBirth;
    let customerObservable = this.customerService.updateCustomer(newCustomer);
    customerObservable.subscribe(
      () => console.log("Update customer successfully"),
      error => console.error("Update customer: " + error),
      () => console.log("Update customer completely")
    );
    this.router.navigateByUrl('customer/list');
  }

  pickDateOfBirth(valueFromChild: string): void {
    this.dateOfBirth = valueFromChild;
  }
}
