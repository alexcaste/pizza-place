//begin Javascript

function Pizza(pizzaSize) {
  this.pizzaSize=pizzaSize;
  this.toppings=[];
}

Pizza.prototype.price = function(pizzaSize, toppings, quantity) {
  var subTotal = 10;

  switch (pizzaSize) {
    case 1:
      break;
    case 2: subTotal = subTotal + 2;
      break;
    case 3: subTotal = subTotal + 4;
      break;
    case 4: subTotal = subTotal + 6;
      break;
  }

  var toppingSubtotal = toppings.length * 2;
  subTotal = subTotal + toppingSubtotal;

  var total = subTotal*quantity;

  return total;
}

// indiv = 1
// sm = 2
// med = 3
// lg = 4
