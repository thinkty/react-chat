import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputArea } from '../InputArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputArea',
  component: InputArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InputArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputArea> = (args) => <InputArea {...args} />;

export const BasicInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicInput.args = {
  onSubmit: () => { alert('Yay!') }
};
