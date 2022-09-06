import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Store } from '@ngrx/store';
import { ProductsState } from '../+state/products.reducer';
import { initProducts, updateProduct } from '../+state/products.actions';
import { getAllProducts } from '../+state/products.selectors';
import { Observable } from 'rxjs';
import { ProductsEntity } from '@was-it/models';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from '@was-it/ui';

@Component({
  selector: 'was-it-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductsEntity[]> = this.store.select(getAllProducts);

  constructor(
    private productService: ProductService,
    private store: Store<ProductsState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(initProducts());
  }

  delete(id: number) {
    console.log('deleting', id);
  }

  edit(product: ProductsEntity) {
    console.log('editing', product);
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: { product },
    });

    dialogRef
      .afterClosed()
      .subscribe((updatedProduct) =>
        this.store.dispatch(
          updateProduct({ update: { id: product.id, changes: updatedProduct } })
        )
      );
  }
}
