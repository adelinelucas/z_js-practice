// "for in " loop- iterate over object properties
// not advised to use it on arrays, especially if the order is important 
// on arrays use 'for of' loop instead

const person = {
    name:'susan',
    age:35,
    status:'student'
}
for (const propertyName in person){
    console.log(`${propertyName} : ${person[propertyName]}`)
}