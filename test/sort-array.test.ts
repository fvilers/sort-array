import sortArray, { ArraySorter } from "../src";

test("sorts correctly an array of strings (ascending)", () => {
  expect(
    sortArray(["delta", "alpha", "beta", "gamma", "epsilon"])
  ).toStrictEqual(["alpha", "beta", "delta", "epsilon", "gamma"]);
});

test("sorts correctly an array of strings (descending)", () => {
  expect(
    sortArray(["delta", "alpha", "beta", "gamma", "epsilon"], undefined, "desc")
  ).toStrictEqual(["gamma", "epsilon", "delta", "beta", "alpha"]);
});

test("sorts correctly an array of numbers (ascending)", () => {
  expect(sortArray([5, 2, 1, 3, 4])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("sorts correctly an array of numbers (descending)", () => {
  expect(sortArray([5, 2, 1, 3, 4], undefined, "desc")).toStrictEqual([
    5, 4, 3, 2, 1,
  ]);
});

test("sorts correctly an array of objects on a specific property (ascending)", () => {
  expect(
    sortArray(
      [
        { letter: "delta" },
        { letter: "alpha" },
        { letter: "beta" },
        { letter: "gamma" },
        { letter: "epsilon" },
      ],
      "letter"
    )
  ).toStrictEqual([
    { letter: "alpha" },
    { letter: "beta" },
    { letter: "delta" },
    { letter: "epsilon" },
    { letter: "gamma" },
  ]);
});

test("sorts correctly an array of objects on a specific property (descending)", () => {
  expect(
    sortArray(
      [
        { letter: "delta" },
        { letter: "alpha" },
        { letter: "beta" },
        { letter: "gamma" },
        { letter: "epsilon" },
      ],
      "letter",
      "desc"
    )
  ).toStrictEqual([
    { letter: "gamma" },
    { letter: "epsilon" },
    { letter: "delta" },
    { letter: "beta" },
    { letter: "alpha" },
  ]);
});

test("sorts correctly an array of objects on a specific date property (ascending)", () => {
  expect(
    sortArray(
      [
        { letter: "delta", created: new Date(2021, 10, 26, 6, 47) },
        { letter: "alpha", created: new Date(2021, 10, 26, 6, 45) },
        { letter: "beta", created: new Date(2021, 10, 26, 6, 48) },
        { letter: "gamma", created: new Date(2021, 10, 26, 6, 46) },
        { letter: "epsilon", created: new Date(2021, 10, 26, 6, 49) },
      ],
      "created"
    )
  ).toStrictEqual([
    { letter: "alpha", created: new Date(2021, 10, 26, 6, 45) },
    { letter: "gamma", created: new Date(2021, 10, 26, 6, 46) },
    { letter: "delta", created: new Date(2021, 10, 26, 6, 47) },
    { letter: "beta", created: new Date(2021, 10, 26, 6, 48) },
    { letter: "epsilon", created: new Date(2021, 10, 26, 6, 49) },
  ]);
});

test("sorts correctly an array of objects on a specific date property (descending)", () => {
  expect(
    sortArray(
      [
        { letter: "delta", created: new Date(2021, 10, 26, 6, 47) },
        { letter: "alpha", created: new Date(2021, 10, 26, 6, 45) },
        { letter: "beta", created: new Date(2021, 10, 26, 6, 48) },
        { letter: "gamma", created: new Date(2021, 10, 26, 6, 46) },
        { letter: "epsilon", created: new Date(2021, 10, 26, 6, 49) },
      ],
      "created",
      "desc"
    )
  ).toStrictEqual([
    { letter: "epsilon", created: new Date(2021, 10, 26, 6, 49) },
    { letter: "beta", created: new Date(2021, 10, 26, 6, 48) },
    { letter: "delta", created: new Date(2021, 10, 26, 6, 47) },
    { letter: "gamma", created: new Date(2021, 10, 26, 6, 46) },
    { letter: "alpha", created: new Date(2021, 10, 26, 6, 45) },
  ]);
});

type TestObject = { a: { b: { c: number } } };

test("sorts correctly an array of objects with a deep selector (ascending)", () => {
  expect(
    new ArraySorter<TestObject>([
      { a: { b: { c: 3 } } },
      { a: { b: { c: 5 } } },
      { a: { b: { c: 1 } } },
      { a: { b: { c: 2 } } },
      { a: { b: { c: 4 } } },
    ]).sort(["a", "b", "c"], "asc")
  ).toStrictEqual([
    { a: { b: { c: 1 } } },
    { a: { b: { c: 2 } } },
    { a: { b: { c: 3 } } },
    { a: { b: { c: 4 } } },
    { a: { b: { c: 5 } } },
  ]);
});

test("sorts correctly an array of objects with a deep selector (descending)", () => {
  expect(
    new ArraySorter<TestObject>([
      { a: { b: { c: 3 } } },
      { a: { b: { c: 5 } } },
      { a: { b: { c: 1 } } },
      { a: { b: { c: 2 } } },
      { a: { b: { c: 4 } } },
    ]).sort(["a", "b", "c"], "desc")
  ).toStrictEqual([
    { a: { b: { c: 5 } } },
    { a: { b: { c: 4 } } },
    { a: { b: { c: 3 } } },
    { a: { b: { c: 2 } } },
    { a: { b: { c: 1 } } },
  ]);
});
