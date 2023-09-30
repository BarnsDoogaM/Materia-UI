import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AssociateService } from '../associate.service';
import { Country } from '../product-grid/product';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  associateList: any;
  countryList: Country[] = [];
  addressArray!: FormArray<any>;
  filteredOptions!: Observable<Country[]>;
  editDate: any;

  constructor(private builder: FormBuilder, private associate: AssociateService) { }

  MyForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.array([])
  })

  ngOnInit(): void {
    this.loadAssociate();
    this.loadCountry();
  }

  loadAssociate() {
    this.associate.getAssociate().subscribe(item => {
      this.associateList = item;
    })
  }

  loadCountry() {
    this.associate.getCountry().subscribe(item => {
      this.countryList = item;
    })
  }

  saveAssociate() {
    console.log(this.MyForm.value);
    this.associate.SaveAssociate(this.MyForm.value, this.MyForm.value.id).subscribe(r => {
      alert('saved successfully');
    });

  }
  autoChange(index: any) {
    this.addressArray = this.MyForm.get("address") as FormArray;
    const addObj = this.addressArray.at(index) as FormGroup;
    const _country = addObj.get("country") as FormControl;
    this.filteredOptions = _country.valueChanges.pipe(
      startWith(''),
      map(value => this._listFilter(_country.value || ''))
    )
  }

  private _listFilter(value: string): Country[] {
    const searchValue = value.toLocaleLowerCase();
    return this.countryList.filter(option => option.name.toLocaleLowerCase().includes(searchValue)
      || option.code.toLocaleLowerCase().includes(searchValue))
  }

  addAddress() {
    const associate = this.MyForm.value.id;
    if (associate != '') {
      this.addressArray = this.MyForm.get("address") as FormArray;
      this.addressArray.push(this.createAddRow())
    } else {
      alert('please choose associate');
    }
  }

  cusChange(code: any) {
    this.associate.getAssociateByCode(code).subscribe(res => {
      this.editDate = res;

      this.addressArray = this.MyForm.get("address") as FormArray;
      while (this.addressArray.length !== 0) {
        this.addressArray.removeAt(0);
      }
      for (let i = 0; i < this.editDate.address.length; i++) {
        this.addAddress();
      }
      this.MyForm.setValue({
        id: this.editDate.id,
        name: this.editDate.name,
        address: this.editDate.address
      })
    });
  }

  createAddRow() {
    return this.builder.group({
      title: this.builder.control(''),
      country: this.builder.control(''),
      fullAddress: this.builder.control(''),
    })
  }

  get getAddress() {
    return this.MyForm.get("address") as FormArray;
  }


}
