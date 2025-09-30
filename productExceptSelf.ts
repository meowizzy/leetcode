export class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: Array<number>) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = [];
    }

    return ;
  }
}

console.log(new Solution().productExceptSelf([-1,0,1,2,3]))
