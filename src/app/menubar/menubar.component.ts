import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  matbadge = false;

  ngOnInit(): void {

  }
  matbadgevisibility() {
    this.matbadge = true;
  }
  
}
