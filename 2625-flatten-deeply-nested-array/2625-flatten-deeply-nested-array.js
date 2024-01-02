var flat = function (arr, n) {
  const flatten = (arr, depth) => {
    return depth < n
      ? arr.reduce(
          (acc, val) =>
            acc.concat(Array.isArray(val) ? flatten(val, depth + 1) : val),
          []
        )
      : arr;
  };

  return flatten(arr, 0);
};
