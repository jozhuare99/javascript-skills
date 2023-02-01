const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4* x;
const pipe = (...functions)=>
            (initialValue)=>
            functions.reduce((acc,fn)=>
                fn(acc), initialValue
            )
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

console.log(multiply6(7))
console.log(7*6)