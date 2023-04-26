// filter - returns an new array, can manipulate the size of new array (unlike map), returns base on condition
// Find - returns signle instance, returns first match, if no match return undefined

const people = [
    {name:'bob', age: 20, position: 'developper'},
    {name:'peter', age: 25, position: 'designer'},
    {name:'susy', age: 40, position: 'the boss'},
    {name:'anna', age: 35, position: 'intern'}
]
const fruits =['orange', 'pear', 'lemon', 'raseberry'];
// filter
const youngPeople = people.filter((personn)=>{
    // if(personn.age < 30) return personn
    return personn.age < 30
})
console.log(youngPeople);

const developpersPeople = people.filter((personn)=> personn.position ==='developper');
console.log(developpersPeople)

// no match 
// returning empty array
const seniorDevs = people.filter((personn) => personn.position === 'developper' && personn.age >30)
console.log(seniorDevs)

// find 
const peter = people.find((item)=> item.name === 'peter');
console.log(peter)
console.log(peter.position)
const anna = people.filter((person)=> person.name ==='anna') // return an array
console.log(anna[0].position)
const fruit = fruits.find((item)=> item === 'lemon');
console.log(fruit)

// no match -- undefined
const oldPersonn = people.find((personn) => personn.age > 75)
console.log(oldPersonn)

// multiple matches -first match
const randomPersonn = people.find((personn)=> personn.age <30)
console.log(randomPersonn)