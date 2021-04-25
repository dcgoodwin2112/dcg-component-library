import React from "react";

import { Progress } from "../index";

export default {
  title: "Progress Bar",
  component: Progress,
  argTypes: {
    borderColor: { control: "color" },
    fillColor: { control: "color" },
  },
};

const Template = (args) => <Progress {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  value: '50',
  ariaText: 'Loading',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  value: '50',
  ariaText: 'Loading',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  value: '50',
  ariaText: 'Loading',
};
