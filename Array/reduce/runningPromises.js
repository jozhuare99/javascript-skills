function runPromises(arr, input){
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
            Promise.resolve(input)
    )
}
function p1(a){
    return new Promise((resolve, reject)=>{
        resolve(a * 5)
    })
}

function p2(a){
    return new Promise((resolve,reject)=>{
        resolve(a*2);
    })
}
function f3(a){
    return a *3;
}
function p4(a){
    return new Promise((resolve, reject)=>{
        resolve(a*4);
    })
}
const promiseArr = [p1,p2,f3,p4];
runPromises(promiseArr, 10).then(console.log)
