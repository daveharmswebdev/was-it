import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ProductsActions from './products.actions';
import { ProductService } from '../products/product.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      fetch({
        run: (action) => {
          return this.productService.getProducts().pipe(
            map((products) =>
              ProductsActions.loadProductsSuccess({
                products,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      mergeMap((update) =>
        this.productService.updateProducts(update.update).pipe(
          map((product) => ProductsActions.updateProductSuccess({ product })),
          catchError((error) => of(ProductsActions.updateProductFailure(error)))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private productService: ProductService
  ) {}
}
