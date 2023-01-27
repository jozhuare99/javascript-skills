//write a javascript function to get the first element of an array

const  first = (arr)=>{
    return arr[0]
} 

//solution 2
var first2  = function(arr,n){
    if(arr ==null){
        return void 0;
    }
    if(n ==null){
        return arr[0]
    }
    if(n < 0)return [];
    return arr.slice(0, 1)
}

