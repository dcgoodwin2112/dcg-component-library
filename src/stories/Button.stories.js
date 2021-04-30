import React from "react"

import { Button } from "../index"

// eslint-disable-next-line
export default {
  title: "Library/Button",
  component: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary"
};
