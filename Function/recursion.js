function reverseString(s){
    if(s == "") return "";
    return reverseString(s.substring(1))+s[0]
}
console.log(reverseString('tar'));