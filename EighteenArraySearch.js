const a1=['i am Good','to infinity','and beyond']

console.log(a1.indexOf('to infinity'));

const a2=[{
title:'glengarry',
done:'watched'
},{
title:'crawl',
done:'watched'
},{
title:'ff9',
done:'notwatched'    
}]
const index=a2.findIndex(function(a2, index){
console.log(a2)
return a2.title==='ff9'
})
console.log(index);