import { partition } from "../src/cases";

describe("partition", () => {
  it("should partition an array based on a predicate", () => {
    const result = partition([1, 2, 3, 4, 5], (x) => x % 2 === 0);
    expect(result).toEqual([
      [2, 4],
      [1, 3, 5],
    ]);
  });

  it("should return all elements in the first group if all match the predicate", () => {
    const result = partition([2, 4, 6], (x) => x % 2 === 0);
    expect(result).toEqual([[2, 4, 6], []]);
  });

  it("should return all elements in the second group if none match the predicate", () => {
    const result = partition([1, 3, 5], (x) => x % 2 === 0);
    expect(result).toEqual([[], [1, 3, 5]]);
  });
});
