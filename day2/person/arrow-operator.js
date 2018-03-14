/*
let add = function(a,b){
    return a+b;
}
*/
let add = (a,b)=>(a+b);

console.log(add(1,2));


let evenArr = (numbers)=>{
    let returnArr = [];
    for(i in numbers){
        (numbers[i]%2===0) ? returnArr.push(numbers[i]) : null;
    }
    return returnArr;
}

const numbers = [12,23,34,45,56];

console.log(evenArr(numbers));

