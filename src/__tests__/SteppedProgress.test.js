import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Default } from "../stories/SteppedProgress.stories";

it("Renders Default Stepped Progress component", async () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
