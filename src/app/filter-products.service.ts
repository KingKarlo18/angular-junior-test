import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from './model';
import { filter, max } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root',
})
export class FilterProductsService {
  allProducts!: IProduct[];
  public productDataSource = new EventEmitter<IProduct[]>();
  constructor() {
    this.allProducts = products;
    this.productDataSource.emit(this.allProducts);
  }

  getProducts(products: IProduct[]) {
    this.allProducts = products;
  }

  filterProducts(minValue: number, maxValue: number) {
    console.log(minValue, maxValue, this.allProducts);
    const filteredProducts = this.allProducts.filter((product) => {
      return product.price < maxValue && product.price > minValue;
    });
    console.log(filteredProducts);
    this.productDataSource.emit(filteredProducts);
  }
}
