import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Spinner, { type ISpinner } from './Spinner';
import { mockSpinnerProps } from './Spinner.mock';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSpinnerProps.base,
} as ISpinner;