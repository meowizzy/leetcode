export class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums: Array<number>, target: number) {
    let start = 0;
    let end = nums.length - 1;

    let i = 0;

    while (i < nums.length) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }

      i++;
    }

    return -1;
  }
}

console.log(new Solution().search([-1,0,2,4,6,8], 4));