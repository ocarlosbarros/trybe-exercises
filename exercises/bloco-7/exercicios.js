const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const greetings = `Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone:${order.phoneNumber},${order.address.street},Nº.${order.address.number},AP: ${order.address.apartment}`;
  return console.log(greetings);
}

customerInfo(order);

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const priceTotal = order.order.drinks.coke.price * 5;
  const greetings = `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${priceTotal.toFixed(2).replace('.', ',')}.`;
  return console.log(greetings);

}

orderModifier(order);

