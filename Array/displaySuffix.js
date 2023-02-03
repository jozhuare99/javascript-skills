// Display the colors entered in an array by a specific format 
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"]
function ColorNum(){
    const Ordinal = (n)=> {
        const x = n % 100;
        return x + (o[(x - 20) % 10] || o[x] || o[0]);
    }
    for(let i = 0; i < color.length; i++){
        var ordinal = i + 1;
        var output = (Ordinal(ordinal) + " choice is " +color[i]+".")
        console.log(output);
    }
}
// ColorNum()
//solution 2
function text_transform(elem, num){
    let n = num % 10;
    switch(n){
        case 1:{
            return n + `${o[1]} choice is ${elem}`
        }
        case 2:{
            return n + `${o[2]} choice is ${elem}`
        }
        case 3:{
            return n + `${o[3]} choice is ${elem}`
        }
    }
    return n + `${o[0]} choice is ${elem}`
}
for(let i = 0; i< color.length; i++){
    // console.log(text_transform(color[i], i + 1));
}
// solution 3
function makeOrdinal(cardinal){
    let ord = ['th','st','nd','rd']
    let last   = cardinal % 10;
    if(cardinal>10&&cardinal<14){
        return cardinal + ord[0];
    } else  if(last<4){
        return cardinal + ord[last];
    } else {
        return cardinal + ord[0]
    }
}
function addColor(colors){
    for (let key in colors){
        var result =   `${makeOrdinal(+key+1)} color is ${colors[key]}`;
        console.log(result);
    }
}
// addColor(color)
//solution 4
function colsaa() {
    const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    const o = ["th", "st", "nd", "rd"];

    for (let n = 0; n < color.length; n++) {
        const cardinal = n + 1;
        const ordinal = cardinal + (o[cardinal] || o[0]);
        console.log(`${ordinal} choice is ${color[n]}.`);
    }
};
//solution 5
//src arrays
const src = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
//wider sample is required to test for 11-th, 21-st or 22-nd
const colors = Array.from({length: 30}, () => src[Math.round(Math.random()*(src.length-1))]);
//result
const result = colors.forEach((item, i) => {
const idx = ~~(i%10)+1 > 3 || ~~(i/10) == 1 ? 0 : ~~(i%10)+1;
// console.log(`${i+1}-${o[idx]} color is ${item}`);
});
// solution 6
function ordinal_suffix(obj){
           let ordinal = 0,
               message = '';
           
          function assignSuffix(n) {
               let suffix = ["th", "st", "nd", "rd"],
               x = n%10, 
               y = n%100; 
               
               if (x === 1 && y !== 11){
                   return n + suffix[1];
               }
               else if (x === 2 && y !== 12){
                   return n + suffix[2];
               }
               else if (x=== 3 && y !== 13) {
                   return n + suffix[3];
               }
               else {return n + suffix[0];}
           }
           function displaySuffix() 
           {
               for (let i = 0, len = obj.length; i < len; i += 1) 
               {
                   ordinal += 1;
                   message = `${assignSuffix(ordinal) } choice is ${obj[i]}`;
                   console.log(message);
               }
           }
           displaySuffix();
       }
       
       ordinal_suffix(color);