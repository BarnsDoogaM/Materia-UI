import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { TableProductComponent } from './table-product/table-product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';
import { TourComponent } from './tour/tour.component';
import { SliderComponent } from './slider/slider.component';
import { FormdesignComponent } from './formdesign/formdesign.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Notifications', component: HomeComponent
  },
  {
    path: 'form', component: FormdesignComponent
  },
  {
    path: 'popup', component: PopupComponent
  },
  {
    path: 'slider', component: SliderComponent
  },
  {
    path: '', component: CardComponent
  },
  {
    path: 'tour', component: TourComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'AutoComplete', component: AutoCompleteComponent
  },

  {
    path: 'viewproducts', component: ViewproductsComponent
  },
  {
    path: 'table', component: TableProductComponent
  },
  {
    path: 'card', component: CardComponent
  },
  {
    path: 'menu', component: MenubarComponent
  },
  {
    path: 'grid', component: ProductGridComponent
  },
  {
    path: '**', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
