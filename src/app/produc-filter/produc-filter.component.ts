import { Component, inject } from '@angular/core';
import { FilterProductsService } from '../filter-products.service';

@Component({
  selector: 'app-produc-filter',
  templateUrl: './produc-filter.component.html',
  styleUrls: ['./produc-filter.component.scss'],
})
export class ProducFilterComponent {
  minInput!: number;
  maxInput!: number;
  constructor(private filterProductService: FilterProductsService) {}

  filter() {
    console.log(this.minInput, this.maxInput);
    this.filterProductService.filterProducts(this.minInput, this.maxInput);
  }
}
