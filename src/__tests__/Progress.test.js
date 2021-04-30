import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Default } from "../stories/Progress.stories";

it("Renders Default progress component", async () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("progressbar")).toBeInTheDocument()
});
