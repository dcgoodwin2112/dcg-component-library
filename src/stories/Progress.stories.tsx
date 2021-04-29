import React from "react";

import { Progress } from "../index";

export default {
  title: "Library/Progress Bar",
  component: Progress,
  argTypes: {
    borderColor: { control: "color" },
    fillColor: { control: "color" },
    value: { control: "range" },
    minValue: { control: "range" },
    maxValue: { control: "range" },
  },
};

const Template = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  value: "50",
  ariaLabel: "Loading",
};
