const counter = () => {
  let count = 1;

  return () => {
    return count++;
  };
};

const count = counter();

console.log("===========COUNTER 1===========");
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4
console.log(count()); // 5
console.log("===========COUNTER 1===========");

const counter2 = () => {
  let count = 1;

  return (num?: number) => {
    if (num) {
      count = num;
    }

    return count++;
  };
};

const count2 = counter2();

console.log("===========COUNTER 2===========");
console.log(count2()); // 1
console.log(count2()); // 2
console.log(count2(10)); // 10
console.log(count2()); // 11
console.log(count2()); // 12
console.log("===========COUNTER 2===========");

const counter3 = (initialValue: number = 1, step: number = 1) => {
  let count = initialValue;
  let firstCall = true;

  return (num?: number) => {
    if (firstCall) {
      firstCall = false;
      return count;
    }

    if (num) {
      count = num;
    }

    count += step;

    return count;
  };
};

const count3 = counter3(10, 5);

console.log("===========COUNTER 3===========");
console.log(count3()); // 10
console.log(count3()); // 15
console.log(count3(10)); // 15
console.log(count3()); // 20
console.log(count3()); // 25
console.log("===========COUNTER 3===========");