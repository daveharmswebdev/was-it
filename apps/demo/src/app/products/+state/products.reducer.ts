import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from '@was-it/models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.createProduct, (state) => ({ ...state, error: null })),
  on(ProductsActions.createProductSuccess, (state, { product }) =>
    productsAdapter.addOne(product, { ...state })
  ),
  on(ProductsActions.updateProduct, (state) => ({ ...state, error: null })),
  on(ProductsActions.updateProductSuccess, (state, { product }) =>
    productsAdapter.setOne(product, { ...state })
  ),
  on(
    ProductsActions.loadProductsFailure,
    ProductsActions.updateProductFailure,
    ProductsActions.createProductFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  )
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
