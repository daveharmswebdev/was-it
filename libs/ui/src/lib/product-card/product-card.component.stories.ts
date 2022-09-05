import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';

export default {
  title: 'ProductCardComponent',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ProductCardComponent>;

const Template: Story<ProductCardComponent> = (args: ProductCardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
