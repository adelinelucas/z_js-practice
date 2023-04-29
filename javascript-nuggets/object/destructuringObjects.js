const bob = {
    first:'bob',
    last:'sanders',
    pets: 'dog',
    city:'chicago',
    siblings:{
        sister:'jane'
    }
}

// const firstName = bob.first;
// const lastName = bob.last; 
// const sister = bob.siblings.sister; 
// console.log(firstName, lastName, sister)

const {first, last, city, zip} = bob;
//here zip is not in the object so the variable is undefined.   
// the order is not important because we use the key name
console.log(first, last, city, zip)

// here we have the variable pets and the variable animals
const pets = 'test'
// give alias to rename the property
const {first: firstName, last: lastName, pets:animals} = bob;
console.log(firstName, lastName, animals)

// destructuring and object in an object
// we can also use alias in an object
const {siblings:{sister}, siblings:{sister:favoriteSiblings}} = bob
console.log(sister, favoriteSiblings)

// 
// Destructing and function  
//
function printPersonn(personn){
    // console.log(personn.first)
    const {first, last, city} = personn
    console.log(first, last)
}
// destructuring in paramater of the function
function printPerson({first, last, siblings:{sister}}){
    // console.log(personn.first)
    console.log(first, last, sister)
}
printPersonn(bob)
printPerson(bob)