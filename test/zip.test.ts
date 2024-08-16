import { zip } from "../src/cases";

describe("zip", () => {
  it("should zip two arrays into pairs", () => {
    const result = zip([1, 2, 3], ["a", "b", "c"]);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });

  it("should handle arrays of different lengths", () => {
    const result = zip([1, 2], ["a", "b", "c"]);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });

  it("should return an empty array if either input array is empty", () => {
    const result = zip([], ["a", "b"]);
    expect(result).toEqual([]);
  });
});
