import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  constructor(private activatedRouter: ActivatedRoute, private customerService: CustomerService,
              private router: Router, private snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    let customerObservable: Observable<Customer> = this.customerService.findById(this.id.slice(3));

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
    newCustomer.id = newCustomer.id.slice(3);
    newCustomer.dateOfBirth = this.dateOfBirth;
    let customerObservable = this.customerService.updateCustomer(newCustomer);
    customerObservable.subscribe(
      () => {
        this.snackBar.open('Update successfully', '', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.customerService.filter("Finish edit customer");
        this.router.navigateByUrl('customer/list');
      },
      error => console.error("Update customer: " + error),
      () => console.log("Update customer completely")
    );
    
  }

  pickDateOfBirth(valueFromChild: string): void {
    this.dateOfBirth = valueFromChild;
  }
}
