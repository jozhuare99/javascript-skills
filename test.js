//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

// solution 1
function Dash(num){

const result =  [num[0]]
    for(let i=1; i < num.length;i++){
        if(num[i-1] % 2 ==0 && num[i]%2 == 0){
            result.push('-', num[i]);
        } else {
        result.push(num[i]);
        }
    }
    return result.join('')
}


// solution 2
function insertDash(num) {
    let StringArr= [num]
    let result = StringArr.map((val) => {
        let newVal = [];
            let i = 0;
            while (i < val.length) {
                newVal.push(val[i])
                if (val[i] % 2 === 0 && val[i + 1] % 2 === 0) {
                    newVal.push('-')
                }
                i++;
            };
            return newVal.join('')
        })
    return result[0]
}

// solution 3
function dashesEvenNumbers(stringNumber) {
    const array = [...stringNumber].map(str => Number.parseInt(str));
    const newString = [];
        for(let current = 0, next = 1; current < array.length; current++, next++) {
        if(array[current] % 2 === 0 && array[next] % 2 === 0) {
        newString.push(array[current] + '-');
        } else {
        newString.push(array[current]);
        }
    }
    return newString.join('');
}
console.log(000034);
console.log(dashesEvenNumbers('025468'));


