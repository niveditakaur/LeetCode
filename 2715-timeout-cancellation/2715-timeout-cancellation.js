var cancellable = function (fn, args, t) {
  let cancel = false;
  function cancelFn() {
    cancel = true;
  }
  const timer = setTimeout(() => {
    if (!cancel) {
      fn(...args);
    }
  }, t);
  return cancelFn;
};
