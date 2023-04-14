import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Button from 'components/Button/Button'
import Image from 'next/image'
import Banner from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Banner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />


export const Base = Template.bind({})
Base.args = {
  backgroundColor: 'bg-amber-400',
  primaryContent: (
    <>
      <h1 className="mb-6 text-7xl">Stay Curious</h1>
      <p className="mb-6 text-xl">
        Discover stories, thinking, and expertise from writers on any topic.
      </p>
      <Button
        className="w-40"
        buttonType="btn-primary"
        content="Start Reading"
      />
    </>
  ),
  secondaryContent: (
    <div className="relative -mt-5 hidden h-96 w-96 md:inline-flex lg:h-96">
      <Image
        src="/assets/medium-logo.png"
        alt="Logo"
        fill
        className="rounded-full"
      />
    </div>
  ),
}
