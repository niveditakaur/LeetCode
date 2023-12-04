var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  } else if (functions.length === 0) {
    return functions[0];
  } else {
    return function (x) {
      return functions[0](compose(functions.slice(1))(x));
    };
  }
};
