import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './product-grid/product';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }

  getAssociate() {
    return this.http.get('http://localhost:3000/associate');
  }

  getAssociateByCode(code: any) {
    return this.http.get('http://localhost:3000/associate' + code)
  }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  SaveAssociate(data: any, code: any) {
    return this.http.put('http://localhost:3000/associate/' + code, data)
   }
 
}
