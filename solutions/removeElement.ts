const removeElement = function(nums: Array<any>, val: number) {
  let last = nums.length - 1;
  let i = 0;

  while (i <= last) {
    if (nums[i] === val) {
      const temp = nums[i];
      nums[i] = nums[last];
      nums[last] = temp;
      last--;
    } else {
      i++;
    }
  }

  return nums;
};

console.log(removeElement([0,1,3,2,3,1,3,1], 3));