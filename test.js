//randomly arrange or shuffle an array

let array = [40,90,50,70,80,30,60,10,20];
function fisher_yates(arr){
    let i = arr.length
    while(--i > 0){
        let temp = Math.floor(Math.random() * (i + 1));
        [arr[temp], arr[i]] = [arr[i], arr[temp]]
    }
    return arr
}
// console.log(fisher_yates(array))

//solution 2
function fy(){
    for(let i = array.length -1; i > 0; i--){
        const r = Math.floor(Math.random() * i)
        let temp = array[i]
        array[i] = array[r]
        array[r] = temp
    }
    console.log(array);
}
// fy()

//solution 3
function shuffle(arr){
    let ctr = arr.length;
    let temp;
    let index;
    while(ctr > 0){
        index = ~~(Math.random() * ctr)
        ctr--;
        temp = arr[ctr]
        arr[ctr] = arr[index]
        arr[index] = temp;
    }
    return arr
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));

// solution 4
function shuffle4(a){
    return a.sort(()=>0.5-Math.random())
}
console.log(shuffle4(myArray));
