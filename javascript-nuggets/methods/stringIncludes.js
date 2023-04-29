// string includes() checks if a string contains another string
// it's case sensitive

const products = [
    {title: 'Modern poster'},
    {title: 'Bar Stool'},
    {title: 'Armachair'},
    {title: 'Leather chair'},
] 

const fristName = 'john'

const res =fristName.includes('jo')
console.log(res)
const res1 =fristName.includes('J', 1)
const res2 =fristName.includes('j', 1)
console.log(res1)
console.log(res2)

const product = {title: 'Modern poster'}
const productRes = product.title.includes('le')
console.log(productRes)

const text = 'st'
const filteredProducts =products.filter((item)=> item.title.toLowerCase().includes(text))
console.log(filteredProducts)