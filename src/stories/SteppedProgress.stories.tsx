import React from "react";

import { SteppedProgress } from "../index";

export default {
  title: "Library/Stepped Progress Bar",
  component: SteppedProgress,
  argTypes: {
    steps: {
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
    current: {
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
  },
};

const Template = (args) => <SteppedProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  steps: 10,
  current: 5,
  ariaText: "Loading...",
};
