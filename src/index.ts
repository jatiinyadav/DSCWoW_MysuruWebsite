import {
  chunk,
  difference,
  intersection,
  shuffle,
  flatten,
  unique,
  rotate,
  zip,
} from "./cases";

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flatArray = flatten(nestedArray);
// Output: [1, 2, 3, 4, 5, 6, 7]

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = unique(arrayWithDuplicates);
// Output: [1, 2, 3, 4, 5]
  
// 3. Example of rotate
const arrayToRotate = [1, 2, 3, 4, 5];
const rotatedArray = rotate(arrayToRotate, 2);
// Output: [4, 5, 1, 2, 3] (Rotated right by 2 positions)

// 4. Example of zip
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const zippedArray = zip(array1, array2);
// Output: [[1, 'a'], [2, 'b'], [3, 'c']]