import { flatten } from "../src/cases";

describe("flatten", () => {
  it("should flatten a nested array", () => {
    const result = flatten([1, [2, [3, 4], 5]]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the same array if there are no nested arrays", () => {
    const result = flatten([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle an empty array", () => {
    const result = flatten([]);
    expect(result).toEqual([]);
  });
});
