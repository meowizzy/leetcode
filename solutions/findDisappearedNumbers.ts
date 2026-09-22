const findDisappearedNumbers = function(nums: Array<number>) {
  let max = nums.length;
  let min = 1;
  let first = 0;
  let last = max - 1;

  for (let i = first; i < last; i++) {
    if (nums[i] === max) {
      const temp = nums[i];
      nums[i] = nums[last];
      nums[last] = temp;
      max--;
      last--;
      first = 0;
    }
  }

  return nums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));