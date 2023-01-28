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

console.log(insertDashes('025468'))
console.log(addingDashMobileNumber(String('09217099339')))
console.log('0009999')