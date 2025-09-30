export class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strings: Array<string>) {
    if (strings.length === 1) return [strings];

    const sortedStrings = strings.map((item) => item.split("").sort().join(""));
    const stringsMap = {};

    for (let i = 0; i < sortedStrings.length; i++) {
      const sortedWord = sortedStrings[i];
      const firstWord = strings[i];

      if (!stringsMap[sortedWord]) {
        stringsMap[sortedWord] = [firstWord];
      } else {
        stringsMap[sortedWord].push(firstWord);
      }
    }

    return Object.values(stringsMap);
  }
}

console.log(new Solution().groupAnagrams(["act","pots","tops","cat","stop","hat"]));
console.log(new Solution().groupAnagrams(["x"]));
console.log(new Solution().groupAnagrams([""]));
