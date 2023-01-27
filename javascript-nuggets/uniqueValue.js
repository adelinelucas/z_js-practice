const menues = [
    {
        name:'burger',
        category:'lunch',
    },
    {
        name:'steak',
        category:'dinner',
    },
    {
        name:'bacon',
        category:'breakfast',
    }
    ,
    {
        name:'eggs',
        category:'breakfast',
    }
    ,
    {
        name:'pasta',
        category:'lunch',
    },
    {
        name:'pancakes',
        category:'breakfast',
    }
]

//get unique values 
// map - get all instances 
// new set - narrow down
// ['all', ... ] - turn it back to array 

const categories = new Set(menues.map((item)=> item.category));
console.log(categories)
// now get uniques values menues.map((item)=> item.category)
// turn to object by using the spread operator

let uniqueCategories = [...new Set(menues.map((item)=> item.category))];
console.log(uniqueCategories)

// we can manuipulate our array to add spécific data 
uniqueCategories = ['all', ...new Set(menues.map((item)=> item.category))];


const result = document.getElementById('result');
result.innerHTML = uniqueCategories.map( (category)=>{
    return `<button>${category}</button>`;
}).join(' - ')