import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

export default {
  title: 'ProductCardComponent',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, FlexLayoutModule],
    }),
  ],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as Meta<ProductCardComponent>;

const Template: Story<ProductCardComponent> = (args: ProductCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 5,
    name: 'Sherry - Dry',
    price: 66.54,
    inventory: 78,
    sku: '10370-101',
  },
};
