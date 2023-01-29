//write a function that accepts only number  input  and it should output with dash'-' in even number

// Solution 1
function insertDashes(num){
    // num = num.toString()
    var result = ''
    for(let i = 0;i < num.length; i++){
        result += num[i];
        if(num[i] % 2 === 0 && num[i+1] % 2 === 0){
            result+="-";
        }
    }
    return result;
}

//function if its a mobile number that leading to zero
function addingDashMobileNumber(num){
    console.log(num);
    var number = ''
    for(let i=0;i<num.length;i++){
        number+=num[i];
        if(i == 3 || i == 6){
            number+='-';
        }
    }
    return number
}

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
    
    //solution 4
    function insertDash4(num) {
        let withDash = '';
        for (let i = 0; i < num.length; i++) {
    
            if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
                withDash += `${num[i]}-`;
            } else {
                withDash += num[i];
            }
    
        }
        return withDash;
    }
    
    //solution 5
    function ex6(nr){
        var arr = [];
        for(var i = 0; i < nr.length; i++){
        if((nr[i] % 2 === 0) && nr[i+1] % 2 === 0){
        arr.push(nr[i] + '-' )
        }
        else arr.push(nr[i])
        }
       return arr.join('');
    }
    // solution 6
    function dash(n) {
        return n.split('').reduce((dashNum,digit,idx,arr) => {
          let currDigit = Number(digit);
          let nextDigit = Number(arr[idx+1]);
          return dashNum += currDigit + (currDigit % 2 === 0 && nextDigit % 2 === 0 ? '-' : '');
        } ,'');
    0  }
    //solution 7
    function insertDash7(str){
    
    const checkEven = (val1) => (Number(val1)%2 == 0);
    var isEven = false;
    
    return String(str).split("")
    .reduce(function(acc,val,ind){
    acc = (checkEven(val) && isEven) ? acc +"-"+val : acc + val;
    isEven = checkEven(val);
    return acc;
    },"");
    
    }
    //solution 8
    function insertBetweenEven (numberStr) {
    var numberArr = numberStr.split('');
    
    return numberArr.map(function (item, i) {
        return numberArr[i] % 2 == 0 
        && (i - 1) >= 0 
        && numberArr[i - 1] % 2 == 0
        && ('-' + numberArr[i])
        || numberArr[i];
        }).join('');
    }
    console.log(insertBetweenEven('025468'))
    
    

console.log(insertDashes('025468'))
console.log(addingDashMobileNumber(String('09217099339')))
console.log('0009999')