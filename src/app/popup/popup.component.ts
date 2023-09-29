
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  countryList = ['nigeria', 'ghana', 'cameroon', 'togo'];
  inputData: any;
  closemessage = 'close using directive';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>, private builder: FormBuilder) { }

 

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

  ngOnInit(): void {
   this.inputData = this.data;
  }

  closepopup() {
    this.ref.close('close using function');
  }

  save() {
    console.log(this.customerForm.value);
  }

  // clear(){
  //   this.customerForm.reset();
  // }
 
}
