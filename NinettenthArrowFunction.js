const sing=function(name){

    return "hey my name is::"+name+" !"
}
console.log(sing("prasad"));

//step 1 remobve function and use arrow => guy


const sing1=(name)=>{

    return `hey may name is ${name} !`
}
console.log(sing1("prasad"));

//***********OR*********** */

const sing2=(name)=>`hey may name is ${name} !`

console.log(sing2("john carpenter"));