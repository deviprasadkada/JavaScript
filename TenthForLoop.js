const days=['MOn','Tue','Wed','Thu','Fri','Sat','Sun']

// for(let i=0;i<days.length;i++){
//     const element=days[i];
//     console.log(element);
// }


//for each
console.log(days[0])
let dance=function(){
    console.log('hello io wannna dance')
}
days.forEach(dance) 
//second way
days.forEach(function(){
    console.log('hello io wannna dance')
})
//
days.forEach(function(day){
    console.log(day)
})