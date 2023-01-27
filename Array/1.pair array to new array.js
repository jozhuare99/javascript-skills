// jozhuare99@gmail.com
let originalArray = [1, 2, 3, 4, 5,6];
let newArray = []
// how to put every 2 items from originalArray to newArray?

// Solution 1.
originalArray.forEach((item, index) => {
  if (index % 2 === 0) newArray.push([item, originalArray[index + 1]]);
});
console.log(newArray);
[[1, 2], [3, 4], [5, 6]]


// Solution 2.
for(let i = 0; i < originalArray.length; i +=2) {
  newArray.push(originalArray.slice(i, i+2))
}
console.log(newArray);
[[1, 2], [3, 4], [5, 6]]


//# What I want 3 pair of item array to new empty array?
let originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray2 = [];


//solution 1.
originalArray2.forEach((item, index) => {
    if (index % 3 === 0) newArray2.push([item, originalArray2[index + 1],originalArray2[index + 2]]);
  });
  console.log(newArray2);
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  //solution 2
  for(let i = 0; i < originalArray2.length; i +=3) {
    newArray.push(originalArray2.slice(i, i+3))
  }
  console.log(newArray2);
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]