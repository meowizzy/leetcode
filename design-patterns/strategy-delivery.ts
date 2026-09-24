type Order = {
  price: number;
  weight: number;
  distance: number;
};

type DeliveryServiceStrategy = (order: Order) => number;

const standardDelivery: DeliveryServiceStrategy = (order) => {
  return 500;
};

const expressDelivery: DeliveryServiceStrategy = () => {
  return 1000;
}

const courierDelivery: DeliveryServiceStrategy = (order) => {
  return 500 + order.weight * 100 + order.distance * 20;
}

const pickupDelivery: DeliveryServiceStrategy = (order) => {
  return 0;
}

function deliveryService(strategy: DeliveryServiceStrategy) {
  let currentStrategy = strategy;

  return {
    setStrategy(strategy: DeliveryServiceStrategy) {
      currentStrategy = strategy;
    },

    calculateDelivery(order: Order) {
      return currentStrategy(order);
    },
  };
}

const delivery = deliveryService(standardDelivery);

delivery.calculateDelivery({
  weight: 400,
  price: 200,
  distance: 200
});

delivery.setStrategy(courierDelivery);

delivery.calculateDelivery({
  weight: 400,
  price: 200,
  distance: 200
});