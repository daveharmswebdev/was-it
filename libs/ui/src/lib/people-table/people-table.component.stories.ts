import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PeopleTableComponent } from './people-table.component';
import { MaterialExampleModule } from '../material.module';

export default {
  title: 'PeopleTableComponent',
  component: PeopleTableComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialExampleModule],
    }),
  ],
} as Meta<PeopleTableComponent>;

const Template: Story<PeopleTableComponent> = (args: PeopleTableComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  people: [],
};
