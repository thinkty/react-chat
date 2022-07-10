import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactChat } from '../ReactChat';

const messages = [
  {
    "isOwner": false,
    "sender": "Mace",
    "content": "In the name of the Galactic Senate of the Republic, you are under arrest, Chancellor."
  },
  {
    "isOwner": true,
    "sender": "Palp",
    "content": "Are you threatening me, Master Jedi?"
  },
  {
    "isOwner": false,
    "sender": "Mace",
    "content": "The Senate will decide your fate."
  },
  {
    "isOwner": true,
    "sender": "Palp",
    "content": "I am the Senate!"
  },
  {
    "isOwner": false,
    "sender": "Mace",
    "content": "Not yet!"
  },
  {
    "isOwner": true,
    "sender": "Palp",
    "content": "It is treason, then."
  }
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactChat',
  component: ReactChat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReactChat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReactChat> = (args) => <ReactChat {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  messages: [],
  onSubmit: () => {},
};

export const Filled = Template.bind({});
Filled.args = {
  messages: messages,
  onSubmit: () => {},
};
