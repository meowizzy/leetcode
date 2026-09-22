export class Solution {
  /**
   * @param {string} word
   * @return {Record<string, number>}
   */
  mapWordAndCountChars(word: string): Record<string, number> {
    const mappedWord = {};

    for (let i = 0; i < word.length; i++) {
      if (!mappedWord[word.charAt(i)]) {
        mappedWord[word.charAt(i)] = 1;
      } else {
        mappedWord[word.charAt(i)] = ++mappedWord[word.charAt(i)];
      }
    }

    return mappedWord;
  }

  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const firstMappedWord = this.mapWordAndCountChars(s);
    const secondMappedWord = this.mapWordAndCountChars(t);

    for (const key in firstMappedWord) {
      if (firstMappedWord[key] !== secondMappedWord[key]) {
        return false;
      }
    }

    return true;
  }
}

const solution = new Solution();

console.log(solution.isAnagram("racecar", "carrace"));
console.log(solution.isAnagram("jar", "jam"));
console.log(solution.isAnagram("a", "ab"));