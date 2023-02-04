// write a  javascript program to perform a binary search
function binary_Search(items, value) {
    let fi = 0
    let li = items.length - 1
    let middleIndex = Math.floor((li + fi) / 2);
    while (items[middleIndex] != value && fi < li) {
        if (value < items[middleIndex]) {
            li = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            fi = middleIndex + 1;
        }
        middleIndex = Math.floor((li + fi) / 2)
    }
    return (items[middleIndex] != value) ? -1 : middleIndex;
}

const items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binary_Search(items, 6));

//solution 2
function binary_search2(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === val) {
            return mid;
        }
        if (val < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1;
}
// console.log(binary_search2(items, 7));
//solution 3
function binary_Search3(arr = [], index) {
    let result = arr.indexOf(index);
    return result
}
// console.log(binary_Search3(items, 2))
//solution 4
function binary_Search4(items, value) {
    const a = items.sort()
    return a.indexOf(value)
}
// console.log(binary_Search4(items, 6))
//solution 5
function search(array, val) {
    for (var i = 0; i <= array.length; i++) {
        if (array[i] == val) {
            return i;
        }
    }
}
// console.log(search(items, 4));
//solution 6

function binarySearch6(arr, num) {
    let result;
    let half = 0;
    let first = 0;
    let last = arr.length;
    function searchLoop() {
        //find the middle of the array
        half = half + Math.floor((last - first) / 2);
        if (arr[half] == num) {
            result = half;
            return;
        } else {
            if (num < arr[half]) {
                last = half;
                searchLoop();
            }
            else {
                first = half;
                searchLoop();
            }
        }
    }
    searchLoop();
    return result;
}
// console.log(binarySearch6([1, 2, 3, 4, 5, 7, 8, 9], 5))
//solution 7
function binarySearch7(array, element) {
    // const comparator = (a, b) => {
    //     return a - b;
    // }
    // array.sort(comparator);

    let medium = Math.ceil(array.length / 2);
    let start = (element < array[medium] ? 0 : medium);
    let end = (start === 0 ? medium : array.length);

    let indexFound = 0;
    for (let index = start; index < end; index++) {
        if (array[index] === element) {
            indexFound = index;
        }

    }

    return `Indice donde se encuentra: ${indexFound + 1}`;
}

const array = [50, 15, 300, 201, 188, 1004, 603, 20123];
let result = binarySearch7(array, 1004);
console.log(result);