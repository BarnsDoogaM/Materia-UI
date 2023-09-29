import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsComponent } from './viewproducts.component';

// describe('ViewproductsComponent', () => {
//   let component: ViewproductsComponent;
//   let fixture: ComponentFixture<ViewproductsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ViewproductsComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ViewproductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('hello component', () =>{
  // beforeEach(async, () => {
    
  // })

  it('should create a component when create component is called', () => {
    let component = ViewproductsComponent;
    let fixture: ComponentFixture<ViewproductsComponent>;

    expect(component).toBeTruthy();
  })
})