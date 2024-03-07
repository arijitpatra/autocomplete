import "@testing-library/jest-dom/vitest";
import { describe, expect, test, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import NoResults from "./NoResults";

describe("Unit test for NoResults:", () => {
  beforeEach(() => {
    render(<NoResults />);
  });

  test("renders text correctly:", () => {
    const text = screen.getByText("🕵 No results found!");
    expect(text).toBeInTheDocument();
  });
});
