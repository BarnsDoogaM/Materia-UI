import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  colorArray = ['red', 'blue', 'green'];

  filteredOptions!: Observable<string[]>;

  formcontrol = new FormControl('');

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    
  }

  openpopup(){
   var _popup = this.dialog.open(PopupComponent, {
      width: '50%',
      height: '800px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000mms',
      data:{
        user: 'Doogabarnabasmough@gmail.com +2349162955206 ',
      }
    })

    _popup.afterClosed().subscribe(item => {
      console.log(item);
    })
  }
}
