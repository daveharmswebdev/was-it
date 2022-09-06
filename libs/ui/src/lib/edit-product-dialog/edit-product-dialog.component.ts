import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsEntity } from '@was-it/models';

@Component({
  selector: 'was-it-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EditProductDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: ProductsEntity },
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.data.product.name,
      price: this.data.product.price,
      inventory: this.data.product.inventory,
      sku: this.data.product.sku,
    });
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }
}
