//compute the sum of each individual array
function Array_sum(arr1, arr2){
    var result = [];
    var ctr =0;
    var x=0;
    if(arr1.length === 0){
        return "array 1 is empty";
    }
    if(arr2.length === 0){
        return "array 2 is empty";
    }
    while(ctr <  arr1.length && ctr < arr2.length){
        result.push(arr1[ctr] + arr2[ctr]);
        ctr++;
    }
    if(ctr === arr1.length){
        for(x = ctr; x < arr2.length; x++){
            result.push(arr2[x])
        }
    } else {
        for(x =ctr; x< arr1.length; x++){
            result.push(arr1[x])
        }
    }
    return result;
}
// console.log(Array_sum([1,0,2,3,4], [3,5,6,7,8,13]));
// solution 1

const arr1 = [1,0,2,3,4]
const arr2 = [3,5,6,7,8,13]
const addArr2 = (a, b)=>{
    let result = []
    for(let i= 0; i < Math.max(a.length, b.length); i++){
    if(a[i] == undefined) a[i] = 0;
    if(b[i] == undefined) b[i] = 0;
        result.push(a[i] + b[i])
    }
    return result;
}
// console.log(addArr2(arr1, arr2));
//solution 2
function sumArr2(a, b){
    if((a.length != b.length) || (b.length != a.length)){
        (a.push(0) || b.push(0))
    }
    let result = a.map((val, index, arr)=>{
        return val + b[index]
    })
    return result;
}
// console.log(sumArr2(arr1, arr2));
//solution 3
const Array_sum3 =  (...args) =>{
    const arrays = args.sort((a,b)=>{
        return b.length - a.length;
    })
    return arrays[0].map((arr,i)=> arrays[0][i] + (arrays[1][i] || 0))
}
// console.log(Array_sum3(arr1, arr2));
//solution 4
function Array_sum4(a, b){
    return (a.length > b.length) ?  a.map((el , i)=> el + (b[i]||0)) : b.map((el, i)=> el + (a[i]||0))
}
// console.log(Array_sum4(arr1, arr2));

//solution 5
function twoArraySum(a , b){
    const sum = b.flatMap((e, i, arr)=>{
        return e + (a[i] ? a[i] : 0)
    })
    return sum
}
// console.log(twoArraySum(arr1, arr2));
//solution 6
const findLongestArray = ([arr1, arr2]) => arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
const sumIndexValues = ([arr1, arr2]) => arr1.map( (value, index) => value + (!arr2[index] ? 0 : arr2[index]) );

const action = (function1, function2) => function2(function1);
const compose = (...functions) => value => functions.reduce(action, value);
const process = compose(findLongestArray, sumIndexValues)

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

// console.log(process([array1, array2]));
// solution 7 
function sumIndex(a,b){
    let length = Math.max(a.length, b.length)
    let sum = []
    for(let i =0; i<length; i++){
        sum.push((a[i] || 0) + (b[i] || 0))
    }
    return sum;
}
console.log(sumIndex(arr1,arr2));
