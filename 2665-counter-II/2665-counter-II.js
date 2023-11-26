var createCounter = function (init) {
  let Counter = init;
  return {
    increment: function () {
      Counter += 1;
      return Counter;
    },
    reset: function () {
      Counter = init;
      return Counter;
    },
    decrement: function () {
      Counter -= 1;
      return Counter;
    },
  };
};
