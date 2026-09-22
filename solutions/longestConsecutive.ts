export class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: Array<number>) {
    if (!nums.length) return 0;
    if (nums.length === 1) return 1;

    const map = {};

    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = 1;
    }

    let consecutive = 1;
    const keys = Object.keys(map).map(Number);

    for (let i = 0; i < keys.length - 1; i++) {
      if (keys[i + 1] - keys[i] === 1) {
        consecutive++;
      } else {
        break;
      }
    }

    return consecutive;
  }

}

console.log(new Solution().longestConsecutive([]));

