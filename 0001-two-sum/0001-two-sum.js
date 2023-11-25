var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      var sum = nums[i] + nums[j];
      if (sum === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};
