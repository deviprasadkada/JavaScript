//data types---Array 

let one='one'
let two='two'

const heroes=['superman','batman', 1, true]
console.log(heroes)
console.log(heroes[0])
console.log(heroes.length)
console.log(heroes.pop())
console.log(` we have ${heroes.length} in the class`)

// 3 imp methods for arrays
const numbers=['one ','two','threee','four','five']

numbers[1]='SOMETHING '

console.log(numbers);
//********** */1.start
//number shift, shift and unshift are like push and pop
numbers.shift()
console.log(numbers);
numbers.unshift('SOMETHING')
console.log(numbers);
//********** */2.end
//pop removes last element from array, push adds the element in the array
numbers.pop()
console.log(numbers)
numbers.push('push me')
console.log(numbers)
//Middle
//splice deletes '2  value '2' number of values and replace it
numbers.splice(2,2,'splice me idiot')
console.log(numbers)
