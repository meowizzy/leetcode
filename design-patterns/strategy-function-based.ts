type MyPriceStrategy = (price: number, quantity?: number) => number

function regularPriceStrategy(): MyPriceStrategy {
  return (price, quantity) => {
    if (quantity !== undefined) {
      return price * quantity;
    }

    return price;
  };
}

function vipPriceStrategy(): MyPriceStrategy {
  return (price, quantity) => {
    const discount = 0.9;
    const resultPrice = price * discount;

    if (quantity !== undefined) {
      return resultPrice * quantity;
    }

    return resultPrice;
  }
}

function premiumPriceStrategy(): MyPriceStrategy {
  return (price, quantity) => {
    let discount = 0.8;

    if (quantity >= 10) {
      discount = 0.75;
    }

    const resultPrice = price * discount;

    if (quantity !== undefined) {
      return resultPrice * quantity;
    }

    return resultPrice;
  }
}

function wholesalePriceStrategy(): MyPriceStrategy {
  return (price, quantity) => {
    let discount = 0.7;

    if (quantity >= 10) {
      discount = 0.4;
    }

    const resultPrice = price * discount;

    if (quantity !== undefined) {
      return resultPrice * quantity;
    }

    return resultPrice;
  }
}

function priceCalculator(strategy: MyPriceStrategy) {
  let newStrategy = strategy;
  let price: number = 0;

  return {
    setStrategy(strategy: MyPriceStrategy) {
      newStrategy = strategy;
    },
    calculate(newPrice = price, quantity?: number): number {
      return newStrategy(newPrice, quantity);
    }
  };
}

const price = 3000;

const calc = priceCalculator(regularPriceStrategy());

console.log(calc.calculate(price, 10));

calc.setStrategy(vipPriceStrategy());

console.log(calc.calculate(price))

calc.setStrategy(premiumPriceStrategy());

console.log(calc.calculate(price, 10));

calc.setStrategy(wholesalePriceStrategy());

console.log(calc.calculate(price, 20))