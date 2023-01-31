const myArray = ['a','b','a','b','c','e','e','c','d','d','d','d']
const myArrayDuplicatedRemoved = myArray.reduce((accumulator, currentItem)=>{
    if(!accumulator.includes(currentItem)){
        return[...accumulator, currentItem]
    }
    return accumulator
},[])
console.log(myArrayDuplicatedRemoved);