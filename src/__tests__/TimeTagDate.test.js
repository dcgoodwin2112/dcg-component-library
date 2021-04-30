import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  Default,
  ShortMonth,
  NoDayProp,
  YearOnly,
} from "../stories/TimeTagDate.stories";

it("Renders Default TimeTagDate component", async () => {
  render(<Default {...Default.args} />);
  expect(screen.getByText("december")).toBeInTheDocument();
  expect(screen.getByText("30, 1999")).toBeInTheDocument();
});

it("Renders ShortMonth TimeTagDate component", async () => {
  render(<ShortMonth {...ShortMonth.args} />);
  expect(screen.getByText("dec")).toBeInTheDocument();
  expect(screen.getByText("30, 1999")).toBeInTheDocument();
});

it("Renders NoDayProp TimeTagDate component", async () => {
  render(<NoDayProp {...NoDayProp.args} />);
  expect(screen.getByText("december")).toBeInTheDocument();
  expect(screen.getByText(", 1999")).toBeInTheDocument();
});

it("Renders YearOnly TimeTagDate component", async () => {
  render(<YearOnly {...YearOnly.args} />);
  expect(screen.getByText("1999")).toBeInTheDocument();
});
