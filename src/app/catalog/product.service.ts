import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('/api/products');
  }
}
