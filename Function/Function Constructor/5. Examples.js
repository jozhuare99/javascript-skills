//Create a  function that takes two arguments, and returns the sum of those arguments

const adder = new Function("a", "b", "return a + b")

adder(2,1) //3

//other

function Person(name, age){ // function constructor that have properties
  this.name = name;
  this.age = age
}

Person.prototype.sayHello = function(){
  console.log(`Hello, my name is ${this.name}` )
}