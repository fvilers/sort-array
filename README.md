# @fvilers/sort-array

An helper function for constructing className strings conditionally

## Installation

```
npm install @fvilers/sort-array
```

or

```
yarn add @fvilers/sort-array
```

## Usage

```ts
import sortArray from "@fvilers/sort-array";

const array = sortArray.default(
  [
    { letter: "delta" },
    { letter: "alpha" },
    { letter: "beta" },
    { letter: "gamma" },
    { letter: "epsilon" },
  ],
  "letter"
);
console.log(array);
```

Will produce a need array containing

```ts
[
  { letter: "alpha" },
  { letter: "beta" },
  { letter: "delta" },
  { letter: "epsilon" },
  { letter: "gamma" },
];
```
