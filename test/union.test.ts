import { union } from "../src/cases";

describe("union", () => {
  it("should combine two arrays and remove duplicates", () => {
    const result = union([1, 2, 3], [3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return a union of the same array if it is provided twice", () => {
    const result = union([1, 2, 3], [1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return an array with unique elements when arrays have multiple duplicates", () => {
    const result = union([1, 2, 2, 3], [3, 4, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
