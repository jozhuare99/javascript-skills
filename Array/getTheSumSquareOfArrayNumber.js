
//Write a JavaScript program to find the sum of squares of a numeric vector.
function sum_sq(array) {
    var sum = 0
     let i = array.length;
    while (i--) {
        console.log(sum);
        sum += Math.pow(array[i], 2)
    }
    return sum;
  }
   
//   console.log(sum_sq([0,1,2,3,4])); 

  //solution 2
  const array = [0,1,2,3,4]
  let sum =0;

for(let i=0; i<array.length;i++){ 
    sum = sum+Math.pow(array[i], 2)
 }
    // console.log(sum)

//solution 3

console.log(array.reduce((acc, item) => {
    acc += item**2;
    return acc;
}, 0))
  