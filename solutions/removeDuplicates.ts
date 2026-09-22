//argument nums already sorted

const removeDuplicates = function(nums: Array<any>) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return nums;
};

console.log(removeDuplicates([1,1,2]))