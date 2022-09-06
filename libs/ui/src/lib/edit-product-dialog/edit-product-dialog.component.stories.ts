import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EditProductDialogComponent } from './edit-product-dialog.component';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'was-it-app-launcher',
  template: `
    <button mat-raised-button color="accent" (click)="launch()">Launch</button>
  `,
})
class LaunchDialogComponent {
  @Input() lesson = 'hello';
  constructor(private _dialog: MatDialog) {}

  launch(): void {
    this._dialog.open(EditProductDialogComponent, {
      data: {
        product: {
          id: 5,
          name: 'Sherry - Dry',
          price: 66.54,
          inventory: 78,
          sku: '10370-101',
        },
      },
      height: '100%',
      width: '100%',
    });
  }
}

export default {
  title: 'EditProductDialogComponent',
  component: LaunchDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [EditProductDialogComponent],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FlexLayoutModule,
      ],
    }),
  ],
} as Meta<EditProductDialogComponent>;

const Template: Story<LaunchDialogComponent> = (
  args: LaunchDialogComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
