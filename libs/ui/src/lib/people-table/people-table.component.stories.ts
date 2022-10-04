import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PeopleTableComponent } from './people-table.component';
import { MaterialExampleModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'PeopleTableComponent',
  component: PeopleTableComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialExampleModule, BrowserAnimationsModule],
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

export const WithPeople = Template.bind({});
WithPeople.args = {
  people: [
    { id: 2, email: 'jennifer@dave.com', zipCode: '37215' },
    { id: 4, email: 'ethan@ethan.net', zipCode: '37215' },
    { id: 5, email: 'orman@dave.com', zipCode: '37215' },
    { id: 6, email: 'kworters0@canalblog.com', zipCode: null },
    { id: 7, email: 'hcosford1@myspace.com', zipCode: '242640' },
    { id: 8, email: 'esandaver2@t-online.de', zipCode: null },
    { id: 9, email: 'tgane3@prnewswire.com', zipCode: null },
    { id: 10, email: 'tchudleigh4@lulu.com', zipCode: '952-0304' },
    { id: 11, email: 'lmaccrachen5@psu.edu', zipCode: null },
    { id: 12, email: 'kvezey6@tiny.cc', zipCode: null },
    { id: 13, email: 'afaughey7@jigsy.com', zipCode: '2955-004' },
    { id: 14, email: 'alazar8@cpanel.net', zipCode: '571 82' },
    { id: 15, email: 'pbischoff9@wikimedia.org', zipCode: 'V7X' },
    { id: 16, email: 'vtriponya@photobucket.com', zipCode: '5186' },
    { id: 17, email: 'pstobbartb@aboutads.info', zipCode: '4318' },
    { id: 18, email: 'jtaxc@bbc.co.uk', zipCode: null },
    { id: 19, email: 'akillockd@uiuc.edu', zipCode: null },
    { id: 20, email: 'amccollume@wisc.edu', zipCode: '35460-000' },
    { id: 21, email: 'gpressf@dagondesign.com', zipCode: null },
    { id: 22, email: 'echismong@youtu.be', zipCode: null },
    { id: 23, email: 'mlabbatih@goo.gl', zipCode: null },
    { id: 24, email: 'ddunridgei@liveinternet.ru', zipCode: '35076 CEDEX 9' },
    { id: 25, email: 'ddanelutj@java.com', zipCode: '30010' },
  ],
};
