
const recursiveFn = new Function("count", `
(function recursiveFn(count){
  if(count < 0){
    return
  }
  console.log(count)
  recursiveFn(count - 1)
})(count)
`,
);

console.log(recursiveFn(3))