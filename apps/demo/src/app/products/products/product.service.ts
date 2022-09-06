import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsEntity } from '@was-it/models';
import { Update } from '@ngrx/entity';

@Injectable()
export class ProductService {
  private baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductsEntity[]>(this.baseUrl + '/product');
  }

  createProduct(product: ProductsEntity) {
    return this.http.post<ProductsEntity>(this.baseUrl + '/product', product);
  }

  updateProducts(update: Update<ProductsEntity>) {
    return this.http.patch<ProductsEntity>(
      this.baseUrl + '/product/' + update.changes.sku,
      { ...update.changes }
    );
  }
}
