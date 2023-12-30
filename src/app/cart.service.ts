import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private httpClient: HttpClient) { }

  add(product: IProduct) {
    this.cart.push(product);
    this.httpClient.post('/api/cart', this.cart).subscribe(() => {
      alert('added ' + product.name + ' to cart');
    });
  }
}
