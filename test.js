// Write a JavaScript program to find the most frequent item of an array.


// solution 
const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 3, 2, 9, 9, 'a', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
const frequent = (array) => {
    let loopCounter = 0;
    let counter = 1;
    let more = 0;
    let item;
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < array.length; j++) {
            if (array[j] === item) j++;
            if (array[i] === array[j]) {
                counter++;
            }
            loopCounter++;
        }
        if (more < counter) {
            more = counter
            item = array[i]
        }
        counter = 0
    }
    return item + ' ' + more + ' times and loop for over ' + loopCounter + ' times';
}

// solution 1
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const frequent1 = (arr) => {
    var loopCounter = 0
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        if (arr1[i] == item) i++;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] == item) j++
            if (arr[i] == arr[j]) {
                m++;
            }
            loopCounter++;
        }
        if (mf < m) {
            mf = m;
            item = arr[i];
        }
        m = 0;
    }
    return item + " ( " + mf + " times ) looped for ever " + loopCounter + " times"
}
// solution 2
let loopCounter = 0
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) { m++ }
        loopCounter++
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
//solution 3
function mostFreq(arr) {
    let map = arr.reduce((sum, val) => {
        sum[val] = (sum[val] || 0) + 1
        console.log(sum, val);

        return sum
    }, {})
    let findObjMax = Object.values(map)
    let max = Math.max(...findObjMax)
    for (let val in map) {
        if (map[val] === max) {
            console.log(val + " " + `(${max}times)`)
        }
    }
}
var arr3 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//solution 4 faster
function helem(givenArray) {
    let loopCounter = 0;
    let itemsMap = {};
    let maxValue = 0;
    let maxCount = 0;

    for (let item of givenArray) {
        if (itemsMap[item] == null) {
            itemsMap[item] = 1;
        }
        else {
            itemsMap[item]++;
        }
        loopCounter++;

        if (itemsMap[item] > maxCount) {
            maxValue = item;
            maxCount = itemsMap[item];

        }
        console.log(itemsMap);
    }

    return `Value : ${maxValue}, Count : ${maxCount} loop for ${loopCounter} times`
}

// solution 5
mostFreq = (array) => {
    let obj = {},
        most = { occurence: '', frequency: 0 };
    for (const v of array) {
        obj[v] ? obj[v]++ : obj[v] = 1;
        if (obj[v] > most.frequency) {
            most.occurence = v;
            most.frequency = obj[v];
        }
    }
    return most;
};

let highest = mostFreq(arr1);
// console.log(`${highest.occurence} (${highest.frequency} times)`)

//solution 6
var uniqueArray = [...new Set(arr1)];
let count = 0,
    check = 1,
    item6;
for (let i = 0; i < uniqueArray.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (uniqueArray[i] == arr1[j]) {
            count++;
        }
    }
    if (check < count) {
        check = count;
        count = 0;
        item6 = uniqueArray[i];
    }
}
// console.log(item6, `(${check} times)`);

//solution 7
const arr = [3, 3, 3, 3, "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const counts = {};

for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
let max = Math.max(...Object.values(counts))
const findKey = (obj, val7) => {
    return Object.keys(obj).find((key) => {
        return obj[key] === val7
    })
}
const key = findKey(counts, max)
// console.log(`${key} has, ${max}  times `);

// solution 8
const dataX = [1, 2, 3, 2, 3, 4, 3, 5, 43, 5, 2, 546, 3457, 35, 6, 346, 23, 23, 212, 3, 23, 23, 4, 5, 6, 6, 6, 6, 66, 6, 6];

const lastElement = dataX.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});


console.log(lastElement);


