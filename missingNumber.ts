export class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  // if range is [0, n]
  missingNumber(nums: number[]) {
    if (nums.indexOf(0) === -1) return 0;
    if (nums.indexOf(nums.length) === -1) return nums.length;

    const map = {};

    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = 1;
    }

    const keys = Object.keys(map).map(Number);

    for (let i = 0; i < keys.length; i++) {
      if (i !== keys[i]) return i;
    }
  }
}

console.log(new Solution().missingNumber([3,0,1]))
