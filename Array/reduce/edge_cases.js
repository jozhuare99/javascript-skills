const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([50].reduce(getMax, 10)) // 50

// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax)); // 100

// callback is not invoked
console.log([50].reduce(getMax)); // 50
console.log([].reduce(getMax, 1)); // 1
