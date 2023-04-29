// Array includes() - checks if the item is an array
// useful in the conditional statement

const groceries = ['milk', 'bread','meat']

let randomItem = 'leamon'
let milkItem = 'milk'
const isIncluded = groceries.includes(randomItem)
const isIncluded2 = groceries.includes(milkItem)
const isIncluded2WithIndex = groceries.includes(milkItem,1)
console.log(isIncluded)
console.log(isIncluded2)
console.log(isIncluded2WithIndex)
if(groceries.includes(milkItem)){
    console.log(`It's on the list`)
}