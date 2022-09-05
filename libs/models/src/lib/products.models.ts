/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: number; // Primary ID
  name: string;
  price: number;
  inventory: number;
  sku: string;
}
