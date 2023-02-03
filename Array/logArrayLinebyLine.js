
// Write a JavaScript program which prints the elements of the following array
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const writeA = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const seAr = arr[i]
        console.log(`row ${[i]}`)
        for (let j = 0; j < seAr.length; j++) {
            console.log(seAr[j]);
        }
    }
}
// writeA(a)

// solution 1
// for (var i in a) 
// {
// console.log("row " + i);
// for (var j in a[i]) 
//     {
//     console.log(" " + a[i][j]);
//     }
// }

//solution 2
    // let result = a.map((val, index) => {
    //     console.log(`row: ${index}`)
    //     console.log(val.join('\r\n'))
    // })
// console.log(result.join(''))

//solution 3
// a.map((data, index) => {
//     console.log("row " + index);
//     data.map((item, index) => {
//         console.log(""+item)
//     })
// })

//solution 4
// a.forEach((element, index) => {
//     console.log("raw " + index)
//     element.forEach(el => console.log(el))
// })

//solution 5
a.forEach((item, index) => {
    console.log(`row ${index}`)
    for (let value of item) {
        console.log(value);
    }
});