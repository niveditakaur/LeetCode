// 2667. Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    const hello = "Hello World";
    return function() 
    {
      return hello;
    };
  }