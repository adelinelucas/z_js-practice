// Rest Operator ...  same as spread operator
// gathers/ collects items 
// destructuring, function
// placement important, carful with the same name
// difference
// rest when talk about function declaration 
// spread when invoke the function 

// arrays
const fruits = ['orange', 'banana', 'lemon','pear','banana'];
const [first, second, thrid, ...restOftheFruits] = fruits
// in rest we got the array without the first index. 
console.log(first, restOftheFruits)
const specificFruit = restOftheFruits.find((fruit) => fruit === 'pear');
console.log(specificFruit)


// objects
const person = {name:'john',lastname:'peter',job:'developper'}
const {job, ...rest} = person;
console.log(job, rest)

// functions
// rest operator
const getAverage = (name, ...scores) =>{
    console.log(name)
    console.log(scores)
    const average = scores.reduce((acc,curr) => acc += curr,0)/scores.length;
    console.log(average)
}

//spread operator
getAverage(person.name, 89, 76,81)
const testScores = [89, 76,81]
getAverage(person.name,testScores) // will not work, it will give me nested array
console.log('line 36')
getAverage(person.name,...testScores)// instead we use the spread operator