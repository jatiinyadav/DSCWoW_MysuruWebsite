import { rotate } from "../src/cases";

describe("rotate", () => {
  it("should rotate an array by the specified number of steps", () => {
    const result = rotate([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  it("should handle negative rotation values", () => {
    const result = rotate([1, 2, 3, 4, 5], -2);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });

  it("should return the same array if rotated by zero", () => {
    const result = rotate([1, 2, 3], 0);
    expect(result).toEqual([1, 2, 3]);
  });
});
