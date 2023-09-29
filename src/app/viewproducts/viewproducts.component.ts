import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  toggleBtn: boolean = false;

  ngOnInit(): void {
    this.toggleBtn = true;
  }

  

}
