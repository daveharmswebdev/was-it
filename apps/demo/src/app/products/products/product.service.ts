import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsEntity } from '../../../../../../libs/models/src/lib/products.models';

@Injectable()
export class ProductService {
  private baseUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductsEntity[]>(this.baseUrl + '/product');
  }
}
