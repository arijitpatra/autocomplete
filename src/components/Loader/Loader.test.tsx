import "@testing-library/jest-dom/vitest";
import { describe, expect, test, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import Loader from "./Loader";

describe("Unit test for Loader:", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test("renders text correctly:", () => {
    const text = screen.getByText("⌛ Loading...");
    expect(text).toBeInTheDocument();
  });
});
