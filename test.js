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