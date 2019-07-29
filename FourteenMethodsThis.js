let list={
    day:'monday',
    tasks:9,
    tasksdone:4,
 
addtasks:function(){
    console.log("hey add me in the tasks man ")
    console.log(this.tasks)
    console.log(this.day)
    console.log(this.tasksdone)   
},

summary:function(num) {
    this.tasks=this.tasks+num
    return `u have ${this.tasks} in ur list`
    console.log(`u have ${this.tasks} entered as an attendee`)
}

}

list.addtasks()
console.log(list.summary(99))