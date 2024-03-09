// @vitest-environment jsdom

import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App test", () => {
  test("verifying correct render", () => {
    render(<App />);

    screen.debug();

    //   const element = screen.getByRole("button", {
    //     name: /test/i,
    //   });
    //   expect(element).toBeInTheDocument();
    //   expect(element).toHaveTextContent("Test");
    //   expect(element).toHaveClass(/md/i, /primary/i, /button/i);
  });
});
