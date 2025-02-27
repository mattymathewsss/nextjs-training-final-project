import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Button, { type IButton } from './Button';
import { mockButtonProps } from './Button.mock';

export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonType: {
      options: ['btn-primary', 'btn-outline', 'btn-transparent'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BaseButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BaseButton.args = {
  ...mockButtonProps.base,
} as IButton;