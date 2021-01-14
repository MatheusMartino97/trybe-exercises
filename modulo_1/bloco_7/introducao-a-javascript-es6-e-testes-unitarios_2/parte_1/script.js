// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

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
        margherita: {
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
    // Adicione abaixo as informações necessárias.

    return `Olá, ${order['order']['delivery']['deliveryPerson']}. Entrega para: ${order['name']}. Telefone: ${order['phoneNumber']}. ${order['address']['street']}, n° ${order['address']['number']}, apto ${order['address']['apartment']}.`  
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    
    order.order.pizza = {
        muzarella: {
            amount: 1,
            price: 20,
        },
        calabresa: {
            amount: 1,
            price: 20,
        }    
    }

    order.name = 'Luiz Silva'
    order.payment = 50

    return `Olá, Luiz Silva. O total do seu pedidio de muzarella, calabresa e Coca-Cola Zero é ${order.payment} reais.`
}
  ;
  console.log(orderModifier(order))