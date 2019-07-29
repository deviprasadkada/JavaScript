//Problem 1 : if we dont define anything in the local variable it searches for possible value outside the block

// let king="prasad"
if(true){
    // let king="rasad"
    if(true){
          king="asad"
        console.log(king)
    }
}
// problem 2:: if u dont define anything like 'let or var' the value will be global it is accessed anywhere 
if(true){
    console.log(king)
}