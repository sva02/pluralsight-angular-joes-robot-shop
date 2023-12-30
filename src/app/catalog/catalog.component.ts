import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.component';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products!: IProduct[];
  filter: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getFilteredProducts() {
    return this.filter === '' ? this.products : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
