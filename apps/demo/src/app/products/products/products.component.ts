import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Store } from '@ngrx/store';
import { ProductsState } from '../+state/products.reducer';
import { initProducts } from '../+state/products.actions';

@Component({
  selector: 'was-it-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private store: Store<ProductsState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(initProducts());

    this.productService
      .getProducts()
      .subscribe((products) => console.log(products));
  }
}
