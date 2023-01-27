// map 

// returns a new array 
// does not change the size of original array (unlike filter) 
// uses values from original array when making new one
// we can retrun whateever we want in the retrun

const people = [
    {
        name:'bob',
        age:22,
        position:'developer'
    },
    {
        name:'emile',
        age:77,
        position:'maçon'
    },
    {
        name:'joshua',
        age:47,
        position:'electricien'
    }
]

//grabe age of array people
const ages = people.map( (person) =>{
   return person.age * 2
})
console.log(ages);

// utiliser map avec une référence 
const getAges = (person) => person.age * 2;
const agesRef = people.map(getAges)
console.log(agesRef)

//return an object 
const newPeople = people.map((person) =>{
    return {
        fristname : person.name.toUpperCase(),
        oldage: person.age + 20
    }
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`)

const result = document.getElementById('result');
result.innerHTML = names.join('')