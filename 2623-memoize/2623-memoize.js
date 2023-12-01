function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let ans = fn(...args);
      cache.set(key, ans);
      return ans;
    }
  };
}
