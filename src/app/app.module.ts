import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from './material/material.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { TableProductComponent } from './table-product/table-product.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CardComponent } from './card/card.component';
import { TourComponent } from './tour/tour.component';
import { SliderComponent } from './slider/slider.component';
import { FormdesignComponent } from './formdesign/formdesign.component';
import { PopupComponent } from './popup/popup.component';
import { AssociateComponent } from './associate/associate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent,
    ProductGridComponent,
    TableProductComponent,
    ViewproductsComponent,
    HeaderComponent,
    InputComponent,
    MenubarComponent,
    HomeComponent,
    AutoCompleteComponent,
    CardComponent,
    TourComponent,
    SliderComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
