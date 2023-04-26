// Reduce
// iterates, callbakc function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration /value

const staff = [
    {name:'bob', age: 20, position: 'developper', salary:100},
    {name:'peter', age: 25, position: 'designer', salary:300},
    {name:'susy', age: 40, position: 'the boss', salary:400},
    {name:'anna', age: 35, position: 'intern', salary:10}
]

const dailyTotal = staff.reduce((total, curr)=> {
    console.log(total)
    console.log(curr.salary)
    total += curr.salary
    return total // you have to return a value, because you won't be able to loop trough the giving element.
},0)
// here we start at value 0
console.log('dailyTotal', dailyTotal)