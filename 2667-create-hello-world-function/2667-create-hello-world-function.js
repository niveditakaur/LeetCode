function createHelloWorld() {
  const hello = "Hello World";
  return function () {
    return hello;
  };
}
