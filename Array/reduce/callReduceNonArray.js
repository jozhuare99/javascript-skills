const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
  // 9