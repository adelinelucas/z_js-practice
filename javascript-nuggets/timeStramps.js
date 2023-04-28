// timestamps
console.log(new Date())

// unix Time 
// January 1, 1970
// 1s == 1000ms

// Date.now()
console.log(Date.now())
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now())
},1000)

// create id's in learning apps
let people = []
people = [...people, {id:Date.now(),name:'peter'}]
setTimeout(()=>{
    people = [...people, {id:Date.now(),name:'susan'}]
    console.log(people)
},1000)

// create/get dates
console.log(new Date(1682703297163))
const now = Date.now()
const futureDate = new Date(now+ 1000*60);
console.log(futureDate)
// difference between dates
const fristDate = new Date();
const secondDate = new Date(2023,5,28)
const firstValue = fristDate.getTime()
const secondValue = secondDate.getTime();

console.log(firstValue)
console.log(secondValue)
const timeDifference = secondValue - firstValue

console.log({timeDifference})
const minutes = timeDifference /(1000 *60)
console.log({minutes})

const hours = timeDifference / (1000*60*60)
console.log({hours})

const days = timeDifference /(1000 *60*60 *24)
console.log({days})