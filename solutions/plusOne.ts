export class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits: Array<number>) {
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(Number);
  }
}

console.log(new Solution().plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));