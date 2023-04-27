// Array.from - Not on prototype you need to use the key word from 

// from return an array ojevt fromt an object
// with a legth property or iterable object
// from turns array-like/ish into array -string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy))

const text = document.querySelectorAll('.text');
console.log(text)
// here text is a node list, filter or reduce wont work, you have to convert first in array
const newText = Array.from(text)
console.log(newText)
const person = Array.from(text).find((item)=> item.textContent === 'person')
console.log(person)

// passin an objecct
// we can pass a callback function that is call on every element
const items = Array.from({length:120}, (_, index)=> {
    // whatever we return it will be place on every item
    return index
});
console.log(items)
const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);
console.log(pages)
const newItems = Array.from({length:pages}, (_, index)=>{
    const start = index * itemsPerPage;
    const tempItem = items.slice(start, start + itemsPerPage)
    return tempItem;
})
console.log(newItems)