import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserMessage } from '../UserMessage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UserMessage',
  component: UserMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserMessage> = (args) => <UserMessage {...args} />;

export const OtherMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OtherMessage.args = {
  message: {
    isOwner: false,
    sender: 'Bob',
    content: 'Hi this is bob!',
  }
};

export const OwnerMessage = Template.bind({});
OwnerMessage.args = {
  message: {
    isOwner: true,
    sender: 'Me',
    content: 'Hello Bob!',
  }
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message: {
    isOwner: false,
    sender: 'Bob',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
};