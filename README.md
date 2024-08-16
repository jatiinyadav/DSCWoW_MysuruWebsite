[![](https://img.shields.io/npm/v/arr-toolkit.svg)](https://www.npmjs.com/package/arr-toolkit)
[![ci](https://github.com/jatiinyadav/arr-toolkit/actions/workflows/main.yml/badge.svg)](https://github.com/jatiinyadav/arr-toolkit/actions/workflows/main.yml)
# arr-toolkit

arr-toolkit is a comprehensive utility library for array manipulation, offering a range of functions to streamline common array operations such as finding intersections, calculating differences, shuffling elements, chunking arrays, flattening nested structures, ensuring uniqueness, rotating elements, zipping arrays, partitioning based on conditions, and unifying arrays.
## 🛠️ Installation

Install arr-toolkit via npm:

```pre
npm install arr-toolkit
```

## ⭐ Usage

Import the functions you need from arr-toolkit:

| Name             | Usage                                           | Output                        |
| :--------------- | :---------------------------------------------- | :---------------------------- |
| Intersection     | intersection([1, 2, 3], [2, 3, 4])      | `[2, 3]`                      |
| Difference       | difference([1, 2, 3], [2, 3, 4])       | `[1]`                         |
| Shuffle          | shuffle([1, 2, 3, 4, 5])                | `[3, 1, 5, 2, 4]` (varies)    |
| Chunk            | chunk([1, 2, 3, 4, 5], 2)                | `[[1, 2], [3, 4], [5]]`       |
| Flatten          | flatten([1, [2, [3, 4], 5]])             | `[1, 2, 3, 4, 5]`             |
| Unique           | unique([1, 2, 2, 3, 4, 4, 5])           | `[1, 2, 3, 4, 5]`             |
| Rotate           | rotate([1, 2, 3, 4, 5], 2)              | `[4, 5, 1, 2, 3]`             |
| Zip              | zip([1, 2, 3], ['a', 'b', 'c'])       | `[[1, 'a'], [2, 'b'], [3, 'c']]` |
| Partition        | partition([1, 2, 3, 4, 5], x => x % 2 === 0)  | `[[2, 4], [1, 3, 5]]`         |
| Union            | union([1, 2, 3], [3, 4, 5])                   | `[1, 2, 3, 4, 5]`             |



## 🚀 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ✨ Documentation in VS Code

When using this package in Visual Studio Code, you can get more information about each method by hovering over it. 

## 📃 LICENSE

This package in under [MIT License](https://github.com/jatiinyadav/arr-toolkit/blob/master/LICENSE).
