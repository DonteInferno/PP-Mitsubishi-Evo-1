import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-log-in',
  templateUrl: './sign-up-log-in.component.html',
  styleUrls: ['./sign-up-log-in.component.css'],
})
export class SignUpLogInComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  signupForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    LastName: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    dob: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  saveForm() {
    console.log('Form Data is ', this.signupForm.value);
  }
  ngOnInit(): void {}

  validateLName() {
    if (this.signupForm.controls['LastName'].hasError('required')) {
      return 'Please enter last name';
    }
    return null;
  }
  validateFName() {
    if (this.signupForm.controls['firstName'].hasError('required')) {
      return 'Please enter first name';
    }
    return null;
  }
  validateAddress() {
    if (this.signupForm.controls['address'].hasError('required')) {
      return 'Please enter address';
    }
    return null;
  }
  validateUsername() {
    if (this.signupForm.controls['username'].hasError('required')) {
      return 'Please enter username';
    }
    return null;
  }
  validatePassword() {
    if (this.signupForm.controls['password'].hasError('required')) {
      return 'Please enter password';
    }
    return null;
  }
}
