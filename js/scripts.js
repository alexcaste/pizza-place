//Begin Javascript

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

  var toppingSubtotal = toppings.length;
  subTotal = subTotal + toppingSubtotal;

  var total = subTotal*quantity;

  return total;
}


//Begin JQuery

$(document).ready(function(){
// Multi-Select JS
  $('#toppings').multiSelect();
// Carousel JS
  $('.carousel').carousel({
    interval: 2000
  })
// Selectpicker JS
  $('.selectpicker').selectpicker();


//Pizza Form
  var newPizza;

  $("form#pizza").submit(function(event){
      event.preventDefault();
      var inputPizzaSize = parseInt($("#pizzaSize").val());

      var inputToppings = $("#toppings").val();

      var inputQuantity = parseInt($("#quantity").val());

      newPizza = new Pizza(inputPizzaSize);

      newPizza.toppings = inputToppings;

      var newPizzaPrice = newPizza.price(inputPizzaSize, inputToppings, inputQuantity)

      $("#show-price").show();
      $(".pizza-price").text(newPizzaPrice);


  });


});

// indiv = 1
// sm = 2
// med = 3
// lg = 4
