import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ProductsEntity } from '@was-it/models';

@Component({
  selector: 'was-it-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductCardComponent {
  @Input() product!: ProductsEntity;
  @Output() edit = new EventEmitter<ProductsEntity>();
  @Output() delete = new EventEmitter<ProductsEntity>();

  emitEdit() {
    this.edit.emit(this.product);
  }

  emitDelete() {
    this.delete.emit(this.product);
  }
}
