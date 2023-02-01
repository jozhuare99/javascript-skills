const numbers = [-5,6,2,0]

const doublePositiveNumbers = numbers.reduce(
    (accumulator, currentValue)=>{
        if(currentValue > 0){
            const doubled = currentValue * 2;
            return [...accumulator, doubled]
        }
        return accumulator
    }, []
)
console.log(doublePositiveNumbers);
