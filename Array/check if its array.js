//write a function that check the input if its a array

// solution 1
var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };

// solution 2
function is_array2(arr){
    return Array.isArray(arr)? true : false
    }

//solution 3
function chkarr(Arr){

    let result = typeof Arr
    return (result == "object") ? true : false;
    }
//solution 4
function is_array4(a) {
    return a instanceof Array;
    }
//solution 5
const checkIfArray = (arr) => Array.isArray(arr)

  console.log(checkIfArray('w3resource'));
  console.log(checkIfArray([1, 2, 4, 0]));