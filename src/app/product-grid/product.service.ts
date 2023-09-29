import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class productService{
    private productUrl = ' http://localhost:3000/products';

    constructor(private http: HttpClient){}

    products$ = this.http.get<Product[]>(this.productUrl).pipe(
        tap(data => console.log('products', JSON.stringify(data)))
    );
}