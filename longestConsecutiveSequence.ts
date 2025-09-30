export const longestConsecutive = (nums: Array<number>) => {
    const sortedNums = [...Array.from(new Set(nums.sort((a, b) => a - b)))];

    console.log(sortedNums)

    if (sortedNums.length === 1) return 1;

    const result = [];

    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i + 1] - sortedNums[i] === 1) {
            result.push(sortedNums[i]);
        }
    }

    console.log(result)

    return result.length ? result.length + 1 : result.length;
};

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))