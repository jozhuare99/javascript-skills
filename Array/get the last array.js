//Write a JavaScript function to get the last element of an array.

const last = (arr, n)=>{
    if(arr == null){
        return void 0
    }
    if(n == null){
        return arr[arr.length-1]
    }
    const arrArr = arr.slice(Math.max(arr.length - n,0))
    return arrArr[arrArr.length-1]
}

// solution 1

var last1 =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) {
       return array[array.length - 1];}
    return array.slice(Math.max(array.length - n, 0));  
    };

    // soluiton 2
    function last2(arr, n){
        if(n == null){
        return arr[arr.length-1]
        }
        if(n > 0 && n < arr.length){
        return arr.slice(arr.length-n, arr.length)
        }
        if(n > arr.length){
        return arr
        }
        }
// solution 3
const last3 = (arr2, n) => {
    if(arr2 == null) return void 0;
    if(n == null) return arr2.reverse()[0];
    if(n < 0) return [];
    return arr2.reverse().slice(0, n).reverse();
    };
//solution 4
    function last4(arr, n){
        return (n==null)?arr[arr.length -1]:arr.slice(-n);
        }
        

//solution 5 
function itsArray(data) {
    return Array.isArray(data);
    }
function getLastElement(data) {
    let lastElement;
    if (itsArray(data)) {
    for (let i = 0; i < data.length; i++) {
    lastElement = data[i];
    }
    return lastElement;
    }
    }
    //additional solution
    function lastadd(arr, n){
        if(n == null) return arr.slice(-1);
        var res = arr.slice(-n);
        return res;
        }
    //additional solution
        function sub(input,n){
    
            return !n ? input.slice(-1) : input.slice(-n)
            
            }
        console.log(lastadd([7, 9, 0, -2]));
        console.log(lastadd([7, 9, 0, -2],3));
        console.log(lastadd([7, 9, 0, -2],6));
console.log(getLastElement([7, 9, 0, -2]));
console.log(getLastElement([[90,98],[7, 9, 0, -2]]));
console.log(getLastElement([7, 9, 0, -2],6));
console.log(getLastElement([[7, 9, 0, -2],6,[2,3]]));