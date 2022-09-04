import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  inventory: number;

  @Expose()
  sku: string;
}
