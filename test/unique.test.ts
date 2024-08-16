import { unique } from "../src/cases";

describe("unique", () => {
  it("should remove duplicate elements from an array", () => {
    const result = unique([1, 2, 2, 3, 4, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return the same array if there are no duplicates", () => {
    const result = unique([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle an empty array", () => {
    const result = unique([]);
    expect(result).toEqual([]);
  });
});
