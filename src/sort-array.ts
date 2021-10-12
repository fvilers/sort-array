function sortArray<T, K extends keyof T>(
  array: ReadonlyArray<T>,
  on?: K,
  order: "asc" | "desc" = "asc"
): T[] {
  const local = [...array];

  local.sort((first, second) => {
    const predicate = (item: T): T | T[K] =>
      on === undefined ? item : item[on];
    let result = 0;

    if (predicate(first) < predicate(second)) {
      result = -1;
    }
    if (predicate(first) > predicate(second)) {
      result = 1;
    }

    if (order === "desc") {
      result = -result;
    }

    return result;
  });

  return local;
}

export default sortArray;
