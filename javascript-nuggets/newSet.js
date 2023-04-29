// Set object - stores a collection of unique values of any type

// new Set()
// add(Value)
// delete(value)
// clear()
// has(value)

// iterators
// entires(), keys(), values(), forEach()

const unique = new Set();
const random = 'third';
console.log(unique)
unique.add('first')
unique.add('first')
unique.add('first')
unique.add('second')
unique.add('first')
unique.add(random)
unique.add(400)

const result = unique.delete('third') // renvoie true or false et modifie le set
console.log(result)
console.log(unique)

const isValue = unique.has(400) // renvoie true or false
console.log(isValue)

const products = [
    {
        title: 'high-back bench',
        company: 'ikea'
    },
    {
        title: 'albany table',
        company: 'marcos'
    },
    {
        title: 'accent chair',
        company: 'caressa'
    },{
        title: 'wooden table',
        company: 'ikea'
    }
] 

const companies = new Set(products.map((item) => item.company)) 
console.log(companies)
const finalCompanies = [...companies, 'all']
console.log(finalCompanies)

const res = [...new Set(products.map((item) => item.company)) , 'all']
console.log(res)