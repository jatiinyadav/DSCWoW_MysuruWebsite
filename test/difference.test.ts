import { difference } from "../src/cases";

describe("difference", () => {
  it("should return elements in the first array that are not in the second", () => {
    const result = difference([1, 2, 3], [2, 3, 4]);
    expect(result).toEqual([1]);
  }); 

  it("should return the entire first array if there is no overlap", () => {
    const result = difference([1, 2], [3, 4]);
    expect(result).toEqual([1, 2]);
  });

  it("should return an empty array if the first array is empty", () => {
    const result = difference([], [1, 2, 3]);
    expect(result).toEqual([]);
  });
});
