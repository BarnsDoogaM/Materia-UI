import { Component } from '@angular/core';
import { productService } from '../product-grid/product.service';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product-grid/product';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent {

  constructor(private productService: productService) { }

  products$ = this.productService.products$;

}
