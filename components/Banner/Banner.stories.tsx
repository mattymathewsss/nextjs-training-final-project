import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Banner, { type IBanner } from './Banner';
import { mockBannerProps } from './Banner.mock';

export default {
  title: 'Components/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBannerProps.base,
} as IBanner;