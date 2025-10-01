export class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: Array<number>) {
    const resultArray = [];

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
      resultArray[i] = prefix;
      prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
      resultArray[i] *= suffix;
      suffix *= nums[i];
    }

    return resultArray;
  }
}

console.log(new Solution().productExceptSelf([1,2,4,6]))
