//write javascript that remove duplicate array
const arr = [1,2,2,4,5,4,7,8,7,3,6]

const removeDuplicate = (array)=>{
    let tempArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i] != tempArr.find(value => value == array[i])){
            tempArr.push(array[i])
        }
    }
    return tempArr;
}
// console.log(removeDuplicate(arr))

//solution 1
function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  result = removeDuplicates(arr);
//   console.log(result);

//solution 2
let item = []
for(let i=0; i<arr.length; i++){
    if(item.indexOf(arr[i])== -1) item.push(arr[i])
}
// console.log(item);
//solution 3
(function (array, count = {}) {
    array.forEach((item) => { count[item] = (count[item] || 0) + 1 });
    const newArray = Object.keys(count).map(keys => [keys, count[keys]]);
    for (const value of newArray) {
        if (value[1] > 1) {
            array.splice(array.indexOf(value[0]), value[1] - 1);
        }
    }
    console.log(array);
})([1, 'a', 'a', 'b', 1, 4, 7, 8, 7, 3, 'a', 2, 2, 9]);