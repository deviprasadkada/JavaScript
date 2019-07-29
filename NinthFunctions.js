console.log('fsdfd');

let work=function(name, age){
    console.log("Greetings message from user");
    console.log(`hey ${name} ur age is:: ${age}`);
}

work('prasad',24)

//problem 2 

let add=function(a,b){
    let sum=a+b 
//console.log(`the sum of 2 number is ${sum}`)
return sum
}
let result=add(5,7)
//add(5,7)
console.log(result)


let mul=function(mul1,mul2){
    return mul1*mul2
}
let x=mul(2,3)
console.log(x)

//in JS the default value is undefined so aleways try to assign null if u want 
 