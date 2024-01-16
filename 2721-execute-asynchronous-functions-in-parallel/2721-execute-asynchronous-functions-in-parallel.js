var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const result = new Array(functions.length);
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          result[i] = val;
          count++;
          if (count === result.length) resolve(result);
        })
        .catch((reason) => reject(reason));
    });
  });
};
