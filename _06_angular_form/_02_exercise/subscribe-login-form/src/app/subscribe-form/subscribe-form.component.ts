import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  subscribeForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.subscribeForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('')
      }, this.matchPassword),
      country: new FormControl('vn', Validators.required),
      age: new FormControl('', [Validators.required ,Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")])
    })
  }

  onSubmit(): void {
  }

  matchPassword(passwordPair: AbstractControl): any {
    const passwords = passwordPair.value;
    return (passwords.password === passwords.confirmPassword) ? null : {passwordnotmatch: true};
  }

}
