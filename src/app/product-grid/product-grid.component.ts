import { Component } from '@angular/core';
import { productService } from './product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {
  constructor(private productService: productService){}

  products$ = this.productService.products$;
}
