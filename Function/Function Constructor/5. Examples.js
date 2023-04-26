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

//create a function object from a function declaration or function expression

const sumOfArray = new Function("const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return  sumArray")
console.log(sumOfArray.call({}).call({},[1,2,3,4])) //10


// this is unsafe shit 



const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);


console.log(findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5])); // 8



const sayHello = new Function(
  "return function(name){return `hello, ${name}`}"
)

console.log(sayHello.call({}).call({},"world"))