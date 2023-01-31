// write a javascript that sort an items in array 

var arr12 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const SortItemArray =(array)=>{
    array.sort((a,b)=>{
        if(a>b){
            return -1;
        }
    })
    return array.reverse().join()
}

//simple
// console.log(arr.sort((a, b) =>
// (a > b) ? 1 : -1));

// solution 1
var arr1 = [-3,8,7,6,5,-4,3,2,1];
var arr2 = [];
var min = arr1[0];
var pos;
var max = arr1[0];
for (i=0; i<arr1.length; i++){
    if (max<arr1[i]) max=arr1[i];
}

for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1.length;j++){
        if(arr1[j]!="x"){
            if (min>arr1[j]){
                min=arr1[j];
                pos=j;
            }
        }
    }
    arr2[i]=min;
    arr1[pos]="x";
    min=max;
}
// solution 2
function sortArr (input) {
    for (var i = 0; i < input.length - 1; i++) {
     if (input[i] > input[i+1]) {
        var temp = input[i+1];
        input[i+1] = input[i];
        input[i] = temp;
     }
    }
    var x = 0;
    while (x < input.length) {
        if (input[x] > input[x + 1]) {
            sortArr(input);
        }
        x++;
    }
    return input;
    }
// solution 3
const isSorted = arr => {
    return arr.reduce((a, b) => (a <= b && a !== false) ? b : false);
};

function sort3(arr) {
    while (!isSorted(arr)) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }
    return arr;
}
const array3 = [53, 29, 18, 56, 48, 25];
const array32 = [1, -2, 0, 0, -3, 5, 6];
//solution 4
var arr4 = [ 3, 8, 70, 6, 5, -4, 88, 2, 10 ];
var bigger,smaller = "";
for (var i = 0; i < arr1.length; i++) {
	for (var m = i+1 ; m < arr1.length ; m++) {
		if(arr4[i] > arr4[m]){
			bigger = arr4[i];
			smaller = arr4[m];
			arr4[i] = smaller;
			arr4[m] = bigger;
		}
	}
}
console.log(arr4);