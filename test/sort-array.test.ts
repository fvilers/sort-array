import sortArray from "../src/sort-array";

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
