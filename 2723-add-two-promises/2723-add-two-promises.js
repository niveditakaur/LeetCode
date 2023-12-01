//1
var addTwoPromises = async function (promise1, promise2) {
  let [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};

//2
var addTwoPromises = async function (promise1, promise2) {
  try {
    let result1 = await promise1;
    let result2 = await promise2;
    return result1 + result2;
  } catch (error) {
    throw new Error("Error in promises: " + error.message);
  }
};
