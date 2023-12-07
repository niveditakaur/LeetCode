var TimeLimitedCache = function () {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  if (this.cache[key] && this.cache[key].expiration > currentTime) {
    this.cache[key].value = value;
    this.cache[key].expiration = currentTime + duration;
    return true;
  } else {
    this.cache[key] = { value, expiration: currentTime + duration };
    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now();
  if (this.cache[key] && this.cache[key].expiration > currentTime) {
    return this.cache[key].value;
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].expiration > currentTime) {
      count++;
    }
  }
  return count;
};
