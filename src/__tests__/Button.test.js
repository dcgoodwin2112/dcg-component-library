import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary, Secondary } from "../stories/Button.stories";

it("Renders Primary button component", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByText('Primary')).toBeInTheDocument();
});

it("Renders Secondary button component", async () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByText("Secondary")).toBeInTheDocument();
});
