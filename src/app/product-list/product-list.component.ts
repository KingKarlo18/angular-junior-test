import { Component, Input } from '@angular/core';
import { IProduct } from '../model';
import { FilterProductsService } from '../filter-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  constructor(private filterProductService: FilterProductsService) {
    filterProductService.productDataSource.subscribe((data) => {
      this.products = data;
    });
  }
}
