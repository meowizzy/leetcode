export class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  singleNumber(nums: number[]): number {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
        map[nums[i]]++;
      } else {
        map[nums[i]] = 1;
      }
    }

    for (const key in map) {
      if (Number(map[key]) === 1) return Number(key);
    }
  }
}

console.log(new Solution().singleNumber([3,2,3]));