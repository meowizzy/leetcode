const memoize = (cb) => {
  const map = new Map();

  return (...args: Array<number>) => {
    if (map.get(args)) {
      return map.get(args);
    }

    map.set(args, cb(...args))

    return [["value", map.get(args)], ["key", args]];
  };
};

const memoizedMul = memoize((...args) => {
  let mul = 1;

  for (let i = 0; i < args.length; i++) {
    mul *= args[i];
  }

  return mul;
});

console.log(memoizedMul(1,2,3,4))