// we need to know how many pizzas
//
// we need to know the size of the pizza
//
// we need to know what toppings on the pizza
//
//
describe('Pizza', function(){
  it("will create a pizza with given specifications", function(){
    var testPizza = new Pizza(1);
    expect(testPizza.pizzaSize).to.equal(1);
  });

  it("will return the price of a pizza", function(){
    var testPizza = new Pizza(1);
    testPizza.toppings = [1,2];
    expect(testPizza.price(testPizza.pizzaSize, testPizza.toppings, 1)).to.equal(14);
  });

  it("will add toppings to a pizza", function(){
    var testPizza = new Pizza(1);
    var testToppings = ["cheese", "sauce", "meat", "vegetable"];
    testPizza.toppings = testToppings;
    expect(testPizza.toppings).to.eql(["cheese", "sauce", "meat", "vegetable"]);
    expect(testPizza.toppings.length).to.equal(4);
  })
});
