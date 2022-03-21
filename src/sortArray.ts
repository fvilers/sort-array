import Order from "./Order";

type Selector<T, K extends keyof T> = (item: T) => T | T[K];

function sortArray<T, K extends keyof T>(
  array: ReadonlyArray<T>,
  on?: K,
  order: Order = "asc"
): T[] {
  const selector: Selector<T, K> = (item) =>
    on === undefined ? item : item[on];
  const modifier = order === "asc" ? 1 : -1;

  return _sortArray(array, selector, modifier);
}

export function _sortArray<T, K extends keyof T>(
  array: ReadonlyArray<T>,
  selector: Selector<T, K>,
  modifier: number
): T[] {
  return [...array].sort((first, second) => {
    if (selector(first) < selector(second)) {
      return -1 * modifier;
    }

    if (selector(first) > selector(second)) {
      return 1 * modifier;
    }

    return 0;
  });
}

export default sortArray;
