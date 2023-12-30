import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.component';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  hasDiscount(product: IProduct) {
    return product.discount > 0;
  }

  getDiscountedClasses(product: IProduct) {
    let discountedClasses: string[] = [];
    if (this.hasDiscount(product)) {
      discountedClasses.push('strikethrough');
    }
    return discountedClasses;
  }

  getDiscountedStyles(product: IProduct) {
    let discountedStyles: Map<string, string> = new Map();

    if (this.hasDiscount(product)) {
      discountedStyles.set('color', 'red');
    }

    return discountedStyles;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
