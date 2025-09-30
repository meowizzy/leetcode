export class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: Array<number>, target: number) {
    for (let i = 0; i < nums.length; i++) {
      const num = target - nums[i];
      const numIndex = nums.indexOf(num);

      if (numIndex >= 0 && numIndex !== i) {
        return [i, numIndex];
      }
    }

    return [];
  }
}

const solution = new Solution();

console.log(solution.twoSum([3,4,5,6], 7));
console.log(solution.twoSum([5,5], 10));