const people = [
    { name: "Alice" ,age: 21},
    { name: "Max", age: 20},
    { name: "Jane", age: 20},
]
function GroupBy(Obj, prop){
    return Obj.reduce((acc, obj)=>{
        const key = obj[prop]
        const curGroup = acc[key] ?? []
        return {
            ...acc, [key]: [...curGroup, obj]
        }
    }, {})
}
const groupPeople= GroupBy(people, "age")
console.log(groupPeople);