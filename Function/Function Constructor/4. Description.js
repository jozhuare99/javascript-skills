const sum = new Function('a', 'b=1','return a+b')

console.log(sum(2,2))


//The function will be dynamically compiled as a function expression, with the source assembled in the following fashion:

`function anonymous(${args.join(",")}
) {
${functionBody}
}`;

//recursived funtion sample on function constructor

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

console.log(recursiveFn(1))