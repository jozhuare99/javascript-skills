// clone an array
var array_Clone = function(arr) {
  return arr.slice(0);
     };
// let Array = [1,2,3,4,5,6,7,8,9]
let x = [1,2,3,4,5,6,7,8,9]

const clonedArr = array_Clone(x)
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
] 

//solution 2
let cloneArr2 = [...x]

//solution 3
let cloneArr3 = Array.from(x)

//solution 4
let cloneArr4 = x.slice()

//solution 5
let cloneArr5 = x.map(i => i)

//solution 6
let cloneArr6 = x.filter(() => true);

console.log(x)
console.log(cloneArr6);