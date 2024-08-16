/**
Finds the intersection of two arrays.
@param {Array} arr1 - The first array.
@param {Array} arr2 - The second array.
@returns {Array} - An array containing the common elements.
*/
export function intersection(arr1: any[], arr2: any[]): any[] {
  return arr1.filter((element) => arr2.includes(element));
}

/**
Finds the difference between two arrays (elements in the first array that are not in the second).
@param {Array} arr1 - The first array.
@param {Array} arr2 - The second array.
@returns {Array} - An array containing the elements that are only in the first array.
*/
export function difference(arr1: any[], arr2: any[]): any[] {
  return arr1.filter((element) => !arr2.includes(element));
}

/**
Shuffles the elements of an array in random order.
@param {Array} arr - The array to shuffle.
@returns {Array} - A new array with the elements shuffled.
*/
export function shuffle(arr: any[]): any[] {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

/**
 * Splits an array into chunks of a specified size.
 * @param {Array} arr - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} - An array of chunks, where each chunk is an array.
 */
export function chunk(arr: any[], size: number): any[][] {
    const chunks: any = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

/**
 * Flattens a nested array into a single-level array.
 * @param {Array} arr - The array to flatten.
 * @returns {Array} - A flat array.
 */
export function flatten(arr: any[]): any[] {
  return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
}

/**
* Removes duplicate elements from an array.
* @param {Array} arr - The array to filter.
* @returns {Array} - An array with only unique elements.
*/
export function unique(arr: any[]): any[] {
  return [...new Set(arr)];
}

/**
* Rotates an array by a given number of positions.
* @param {Array} arr - The array to rotate.
* @param {number} positions - The number of positions to rotate.
* @returns {Array} - The rotated array.
*/
export function rotate(arr: any[], positions: number): any[] {
  const len = arr.length;
  positions = positions % len;
  return arr.slice(-positions).concat(arr.slice(0, -positions));
}

/**
* Zips two arrays together into pairs.
* @param {Array} arr1 - The first array.
* @param {Array} arr2 - The second array.
* @returns {Array[]} - An array of paired elements.
*/
export function zip(arr1: any[], arr2: any[]): any[][] {
  return arr1.map((item, index) => [item, arr2[index]]);
}


// arrayIntersection
// arrayDifference
// arrayShuffle
// arrayChunk
// arrayFlatten
// arrayUnique
// arrayRotate
// arrayZip
// arrayPartition
// arrayUnion