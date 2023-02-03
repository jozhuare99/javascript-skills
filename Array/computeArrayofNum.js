// Write a JavaScript program to compute the sum and product of an array of integers.
const arr = [1,2,3,4,5,6]

//solution 1
let s = 0,
p = 1,
i;
for (i = 0; i < arr.length; i += 1) 
{
s += arr[i];
p *= arr[i];
}
// console.log('Sum : '+s + ' Product :  ' +p); 

//solution 2
console.log(arr.reduce( (sum, item) => sum + item, 0));
console.log(arr.reduce( (sum, item) => sum*item, 1));
