import { shuffle } from "../src/cases";

describe("shuffle", () => {
  it("should shuffle the elements of an array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = shuffle(array);
    expect(result).not.toEqual([1, 2, 3, 4, 5]);
    expect(result.sort()).toEqual([1, 2, 3, 4, 5]); // Ensure all elements are still present
  });

  it("should handle an empty array", () => {
    const result = shuffle([]);
    expect(result).toEqual([]);
  });

  it("should return the same single-element array", () => {
    const result = shuffle([1]);
    expect(result).toEqual([1]);
  });
});
