interface PriceStrategy {
  calculate(price: number): number;
}

class RegularPriceStrategy implements PriceStrategy {
  calculate(price: number): number {
    return price;
  }
}

class VipPriceStrategy implements PriceStrategy {
  calculate(price: number): number {
    return price * 0.9;
  }
}

class PremiumPriceStrategy implements PriceStrategy {
  calculate(price: number): number {
    return price * 0.8;
  }
}

class WholesalePriceStrategy implements PriceStrategy {
  calculate(price: number): number {
    return price * 0.7;
  }
}

class PriceCalculator {
  constructor(private strategy: PriceStrategy) {}

  setStrategy(strategy: PriceStrategy): void {
    this.strategy = strategy;
  }

  calculate(price: number): number {
    return this.strategy.calculate(price);
  }
}

const regularStrategyCalculator = new PriceCalculator(new RegularPriceStrategy());
const vipStrategyCalculator = new PriceCalculator(new VipPriceStrategy());
const premiumStrategyCalculator = new PriceCalculator(new PremiumPriceStrategy());
const wholesaleStrategyCalculator = new PriceCalculator(new WholesalePriceStrategy());

console.log(regularStrategyCalculator.calculate(3000), "regularStrategyCalculator");
console.log(vipStrategyCalculator.calculate(3000), "vipStrategyCalculator");
console.log(premiumStrategyCalculator.calculate(3000), "premiumStrategyCalculator");

premiumStrategyCalculator.setStrategy(new VipPriceStrategy());

console.log(premiumStrategyCalculator.calculate(3000), "vipStrategyCalculator");

console.log(wholesaleStrategyCalculator.calculate(3000), "wholesaleStrategyCalculator");