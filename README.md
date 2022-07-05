# @fvilers/sort-array

An helper function to sort array based on a property. An helper object to sort on nested properties is also provided.

## Installation

```
npm install @fvilers/sort-array
```

or

```
yarn add @fvilers/sort-array
```

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

## Usage

```ts
import { ArraySorter, sortArray } from "@fvilers/sort-array";

const letters = sortArray(
  [
    { letter: "delta" },
    { letter: "alpha" },
    { letter: "beta" },
    { letter: "gamma" },
    { letter: "epsilon" },
  ],
  "letter"
);
console.log(letters);

type TestObject = { a: { b: { c: number } } };

const objects = new ArraySorter<TestObject>([
  { a: { b: { c: 3 } } },
  { a: { b: { c: 5 } } },
  { a: { b: { c: 1 } } },
  { a: { b: { c: 2 } } },
  { a: { b: { c: 4 } } },
]).sort(["a", "b", "c"], "asc");
console.log(JSON.stringify(objects));
```

Will produce a new array containingIt will output:

```
[
  { letter: 'alpha' },
  { letter: 'beta' },
  { letter: 'delta' },
  { letter: 'epsilon' },
  { letter: 'gamma' }
]
[{"a":{"b":{"c":1}}},{"a":{"b":{"c":2}}},{"a":{"b":{"c":3}}},{"a":{"b":{"c":4}}},{"a":{"b":{"c":5}}}]
```
