import "@testing-library/jest-dom/vitest";
import { describe, expect, test, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import SearchSuggestions from "./SearchSuggestions";

const mockFn = vi.fn();

describe("Unit test for SearchSuggestions:", () => {
  test("renders 'no results found' when there is search text but no data:", () => {
    render(
      <SearchSuggestions
        data={[]}
        isLoading={false}
        searchText="abc"
        onSuggestionClicked={mockFn}
        hideSuggestions={false}
      />
    );

    const noResultsText = screen.getByText("🕵 No results found!");

    expect(noResultsText).toBeInTheDocument();
  });

  test("renders correct list of items to be rendered when data is passed:", () => {
    const dataSet = ["Abcd", "Abbb", "Abyz"];

    render(
      <SearchSuggestions
        data={dataSet}
        isLoading={false}
        searchText="ab"
        onSuggestionClicked={mockFn}
        hideSuggestions={false}
      />
    );

    dataSet.forEach((item) => {
      const listItem = screen.getByText(item.slice(2)); // because matching part is highlighted with bold, so taking the next part
      expect(listItem).toBeInTheDocument();
    });
  });

  test("renders a list item is clicked the callback for onSuggestionClicked should be triggered once:", () => {
    render(
      <SearchSuggestions
        data={["ABC"]}
        isLoading={true}
        searchText="abc"
        onSuggestionClicked={mockFn}
        hideSuggestions={false}
      />
    );

    const listItem = screen.getByText("ABC");
    fireEvent.mouseDown(listItem);
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
