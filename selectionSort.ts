export let count = 0;

const selectionSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }

  return arr;
};

console.log(selectionSort([3,5,1,24,6,7,-1,0,23,4,67,8,5]), count);