const names = ['Alice', 'bob', 'Tiff', 'Brice', 'Alice'];

const countedNames = names.reduce((accumulator, currentValue)=>{
    const  currCount = accumulator[currentValue] ?? 0;
    return {
        ...accumulator,
        [currentValue]:currCount +1 
    }
}, {})

console.log(countedNames);