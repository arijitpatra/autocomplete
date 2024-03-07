import { describe, test, expect } from "vitest";
import { filterDataAsync } from "./filterDataAsync";

const data = [
  {
    name: {
      common: "Aaa",
    },
  },
  {
    name: {
      common: "Abc",
    },
  },
  {
    name: {
      common: "ABa",
    },
  },
];

describe("Unit tets for filterDataAsync:", () => {
  test("filters data correctly as per search text and returns an array:", async () => {
    const result = await filterDataAsync(data, "ab");
    expect(result).toEqual(["Abc", "ABa"]);
  });
});
