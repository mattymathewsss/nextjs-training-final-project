import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import AuthorTitle, { type IAuthorTitle } from './AuthorTitle';
import { mockAuthorTitleProps } from './AuthorTitle.mock';

export default {
  title: 'Components/AuthorTitle',
  component: AuthorTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthorTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthorTitle> = (args) => (
  <AuthorTitle {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockAuthorTitleProps.base,
} as IAuthorTitle;