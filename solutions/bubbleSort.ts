function bubbleSort(arr: Array<number>) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }

      count++;
    }
  }

  return [arr, count];
}

console.log(bubbleSort([1, 2, 3, 4, 5, 8, 7]));