export class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s: string) {
    if (!s.length || s.length === 1 || s.length % 2 > 0) return false;

    const brackets = {
      "(": ")",
      "{": "}",
      "[": "]",
      "<": ">",
    };

    let openClosed;

    for (let i = 0; i < s.length - 1; i+=2) {
      if (brackets[s.charAt(i)] !== s.charAt(i + 1)) {
        openClosed = false;
        break;
      }
    }

    if (openClosed) return true;

    const right = s.substring(s.length / 2, s.length);

    const leftArrClosedBrackets = [];

    for (let i = s.length / 2 - 1; i >= 0; i--) {
      switch (s[i]) {
        case "(":
          leftArrClosedBrackets.push(")");
          break;
        case "{":
          leftArrClosedBrackets.push("}");
          break;
        case "[":
          leftArrClosedBrackets.push("]");
          break;
        case "<":
          leftArrClosedBrackets.push(">");
          break;
      }
    }

    return leftArrClosedBrackets.join("") === right;
  }
}

console.log(new Solution().isValid("[])"));


