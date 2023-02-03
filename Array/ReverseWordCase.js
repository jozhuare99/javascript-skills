// Swap the case of each character of a string, upper case to lower and vice versa
const String = "The Quick Brown Fox";
const reverseCharacterCase = (str) => {
    let tempStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            tempStr += str[i].toLowerCase()
        } else {
            tempStr += str[i].toUpperCase()
        }
    }
    return tempStr;
}
// console.log(reverseCharacterCase(String))

// solution 1
const reverseCharacterCase1 = (str) => {
    let tempStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            tempStr += str[i].toLowerCase()
        } else {
            tempStr += str[i].toUpperCase()
        }
    }
    return tempStr;
}
// console.log(reverseCharacterCase1(String))

//solution 2
var str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    } else if (LOWER.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    } else {
        result.push(str[x]);
    }
}
// console.log(result.join(''));

//solution 3
function swapCase(string) {
    const stringChars = /[a-z]/gi;
    return string.replace(stringChars,
        function (letter) {
            if (letter.match(/[a-z]/)) return letter.toUpperCase();
            return letter.toLowerCase();
        }
    )
}
// console.log(swapCase(String))

//solution 4
b = ''
for (let i of String) {
    if (i == i.toLowerCase()) {
        b += i.toUpperCase()
    } else {
        b += i.toLowerCase()
    }
}

// console.log(b)

// solution 5 has specific target which is every first letter in a word
let str5 = ""
for (let i of String.split(" ")) {
    let substr = ""
    for (let j in i) {
        if (j == 0) {
            substr += i[j].toLowerCase()
        } else {
            substr += i[j].toUpperCase()
        }
    }
    str5 += substr + " "
}
// console.log(str5)

// solution 6
let text = String.split('');
function Up() {
    text.forEach((item, index) => {
        item.match(/[A-Z]/g) ? text[index] = item.toLowerCase() : text[index] = item.toUpperCase();
    });
    console.log(text.join(''));
};