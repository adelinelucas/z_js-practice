const cart = [
    {
        title: 'Samsung Galaxy S7',
        price : 599.99,
        amount: 1
    },
    {
        title: 'Google pixel',
        price : 499.99,
        amount: 2
    },
    {
        title: 'Xiamoni Redmi Note 2',
        price : 699.99,
        amount: 4
    },
    {
        title: 'Xiamoni Redmi Note 5',
        price : 399.99,
        amount: 3
    }
]

let total = cart.reduce((total, curr)=>{
    const {amount, price} = curr;
    total.totalItem += curr.amount;
    total.cartTotal += curr.price * price;
    return total
},{totalItem: 0, cartTotal:0})

// alternantive 
let {totalItems, cartTotal } =  cart.reduce((acc, curr)=>{
    const {amount, price} = curr;
    acc.totalItems += curr.amount;
    acc.cartTotal += parseFloat(curr.price * price.toFixed());
    return acc
},{totalItems: 0, cartTotal:0})

console.log(total)
console.log(totalItems, '--',cartTotal)

const url ="https://api.github.com/users/john-smilga/repos?par_page=100";
const fetchRepos = async()=>{
    response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const newData = data.reduce((total, repo )=>{
        const {language} = repo;
        // if(language){
        //     if(total[language]) total[language] = total[language]+1;
        //     else  total[language] = 1;
        // }

        // refactoring
        if(language){
            total[language] = total[language]+1 || 1
        }
        return total
    }, {})
    console.log(newData)
}

fetchRepos()