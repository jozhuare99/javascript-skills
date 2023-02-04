// find duplicated values in array 
function find_duplicate_in_array(a){
    var object = {};
    var result = []
    a.forEach(function(item){
        if(!object[item]) object[item] = 0;
        object[item] += 1
    })
    for(let prop in object){
        if(object[prop] > 1){
            result.push(prop);
        }
    }
    return result;
}
const array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
// console.log(find_duplicate_in_array(array));