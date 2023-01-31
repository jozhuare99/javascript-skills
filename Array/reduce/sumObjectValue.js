const objects = [{x: 1}, {x:2}, {x:3}]
const sum = objects.reduce(
    (accumulator, currentValue)=> {
        console.log(accumulator, currentValue)
        return accumulator + currentValue.x
    }
, 0)
console.log(sum);