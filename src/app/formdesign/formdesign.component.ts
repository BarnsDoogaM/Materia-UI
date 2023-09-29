import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent {
  countryList = ['nigeria', 'ghana', 'cameroon', 'togo'];

  constructor(private builder: FormBuilder) { }

  customerForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required])),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    dob: this.builder.control(new Date()),
    gender: this.builder.control('female', Validators.required),
      status: this.builder.control(true),
  });

  saveCustomer() {
    console.log(this.customerForm.value);
  }

  clear(){
    this.customerForm.reset();
  }
}
