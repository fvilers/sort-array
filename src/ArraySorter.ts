import Order from "./Order";
import { _sortArray } from "./sortArray";

type ExtractObj<T extends object, K> = K extends keyof T ? T[K] : never;
type Path<T extends object, U extends readonly unknown[]> = U extends readonly [
  infer T0,
  ...infer TR
]
  ? TR extends []
    ? ExtractObj<T, T0> extends never
      ? readonly []
      : readonly [T0]
    : ExtractObj<T, T0> extends object
    ? readonly [T0, ...Path<ExtractObj<T, T0>, TR>]
    : ExtractObj<T, T0> extends never
    ? readonly []
    : readonly [T0]
  : readonly [];

class ArraySorter<T extends object> {
  constructor(private readonly array: ReadonlyArray<T>) {}

  sort<U extends readonly [keyof T, ...unknown[]]>(
    path?: U extends Path<T, U> ? U : never,
    order: Order = "asc"
  ): T[] {
    const modifier = order === "asc" ? 1 : -1;
    const selector = (item: T) => {
      let selected: any = item;

      for (const key of path ?? []) {
        selected = selected[key];
      }

      return selected;
    };

    return _sortArray(this.array, selector, modifier);
  }
}

export default ArraySorter;
