export class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string) {
    if (s.length === 1) return true;

    const loweredString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversed: Array<string> = [];

    for (let i = loweredString.length - 1; i >= 0; i--) {
      reversed.push(loweredString.charAt(i));
    }

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] !== loweredString[i]) return false;
    }

    return true;
  }
}

console.log(new Solution().isPalindrome("tab a cat"));
