const myTodos=[]

myTodos.push('Buy bread')
myTodos.push('make salad')
myTodos.push('make french fries')

myTodos.forEach(function(todo, i){
console.log(`your task no: ${i} is: ${todo}`);
})

const ny=[]
ny.push('manhattan')
ny.push('world trade center')
ny.push('wall street')

ny.forEach(function (todo,i) {
    console.log(`your task number is  ${i} is: ${todo}`)
})

let result=function(cm, tm){
    let mp=(cm/tm)*100
    let mg=''
    if(mp>=90){
        mg='A'
    }else if(mp>=80){
        mg='B'
    }else{
        mg='F'
    }
    return `your grade is ${mg}`
}
let r1=result(95,100)
console.log(r1)
