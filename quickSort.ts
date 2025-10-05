export let count = 0;

function quickSort(arr: Array<number>) {
  if (arr.length <= 1) return arr;

  const left: Array<number> = [];
  const right: Array<number> = [];
  const middleIndex = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    count++;
    if (middleIndex === i) continue;
    if (arr[middleIndex] > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[middleIndex], ...quickSort(right)];
}

console.log(quickSort([2,4,1,5,6,12,4,6,8]), count);