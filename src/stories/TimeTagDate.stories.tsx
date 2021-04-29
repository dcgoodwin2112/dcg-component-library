import React from "react";

import { TimeTagDate } from "../index";

export default {
  title: "Library/Time Tag Date Formatter",
  component: TimeTagDate,
};

const Template = (args) => <TimeTagDate {...args} />;

export const Default = Template.bind({});
Default.args = {
 year: 1999,
 month: 12,
 day: 30
};

export const ShortMonth = Template.bind({});
ShortMonth.args = {
  year: 1999,
  month: 12,
  day: 30,
  abvMonth: true,
};

export const NoDayProp = Template.bind({});
NoDayProp.args = {
  year: 1999,
  month: 12,
};

export const YearOnly = Template.bind({});
YearOnly.args = {
  year: 1999,
};
