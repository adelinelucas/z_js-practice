// three methods to convert objects into arrays
// Object.key() - converts property name into array
// Object.value() - converts property values into array
// Object.entries() converts both

const person = {
    name: 'john',
    age: 25,
    status: 'student'
}

const keys = Object.keys(person)
console.log(keys)

const objValues = Object.values(person)
console.log(objValues)

const properties = Object.entries(person)
console.log(properties)

// map method 
const newRes = properties.map((item)=> {
    console.log(item)
    const [first, second] =item
    console.log({first})
    return second
})
console.log(newRes)

// for of
for (const [first, second] of properties){ // thanks to for of we can destructure direcylt in the loop
    console.log('second for of', second)
}
