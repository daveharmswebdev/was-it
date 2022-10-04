import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditProductDialogComponent } from './edit-product-dialog/edit-product-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleTableComponent } from './people-table/people-table.component';
import { MaterialExampleModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    RouterModule,
  ],
  declarations: [
    ProductCardComponent,
    EditProductDialogComponent,
    PeopleTableComponent,
  ],
  exports: [ProductCardComponent, PeopleTableComponent],
})
export class UiModule {}
