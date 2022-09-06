import { createAction, props } from '@ngrx/store';
import { ProductsEntity } from '@was-it/models';
import { Update } from '@ngrx/entity';

export const initProducts = createAction('[Products Page] Init');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

export const updateProduct = createAction(
  '[Products Page] Update',
  props<{ update: Update<ProductsEntity> }>()
);

export const updateProductSuccess = createAction(
  '[Products/API] Update Product Success',
  props<{ product: ProductsEntity }>()
);

export const updateProductFailure = createAction(
  '[Products/API] Update Product Failure',
  props<{ error: any }>()
);

export const createProduct = createAction(
  '[Products Page] Create Product',
  props<{ product: ProductsEntity }>()
);

export const createProductSuccess = createAction(
  '[Products/API] Create Product Success',
  props<{ product: ProductsEntity }>()
);

export const createProductFailure = createAction(
  '[Products/API] Create Product Failure',
  props<{ error: any }>()
);
