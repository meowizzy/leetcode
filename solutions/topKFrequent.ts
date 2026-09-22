export class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: Array<number>, k: number) {
    if (nums.length === k || nums.length === 1) return nums;

    const map = {};

    for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
        map[nums[i]] = ++map[nums[i]];
      } else {
        map[nums[i]] = 1;
      }
    }

    const keys = Object.keys(map);

    const result = keys.sort((a, b) => {
      return map[b] - map[a];
    });

    result.length = k;

    return result;
  }
}

console.log(new Solution().topKFrequent([1,2,2,3,3,3,3], 2));
console.log(new Solution().topKFrequent([7,7], 1));


