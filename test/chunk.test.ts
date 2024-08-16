import { chunk } from "../src/cases";

describe("chunk", () => {
  it("should split an array into chunks of specified size", () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should handle an array length that is a multiple of the chunk size", () => {
    const result = chunk([1, 2, 3, 4], 2);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should return an empty array if the input array is empty", () => {
    const result = chunk([], 3);
    expect(result).toEqual([]);
  });
});
