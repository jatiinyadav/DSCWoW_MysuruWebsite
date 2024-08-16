import { intersection } from "../src/cases";

describe("intersection", () => {
  it("should return the common elements between two arrays", () => {
    const result = intersection([1, 2, 3], [2, 3, 4]);
    expect(result).toEqual([2, 3]);
  });

  it("should return an empty array if there are no common elements", () => {
    const result = intersection([1, 2], [3, 4]);
    expect(result).toEqual([]);
  });

  it("should return an empty array if one of the arrays is empty", () => {
    const result = intersection([], [1, 2, 3]);
    expect(result).toEqual([]);
  });
});
