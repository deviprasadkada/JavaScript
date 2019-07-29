let email='prasad@kada.com'
let password='prasad'

console.log(password.length);
console.log(email.toUpperCase());

 let login=function(myValue){
     if((myValue.includes('prasad')) && (myValue.length>8)){
         return true
     }
     else{
         return false
     }
 }
console.log(login('prasad3e4'))
// console.log(login('erre'));