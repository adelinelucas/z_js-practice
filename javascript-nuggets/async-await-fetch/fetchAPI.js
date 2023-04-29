// Fetch API - browser API for HTTP (AJAX) request
// defautl - get request, supports other methods as well
// return promises

const url= 'https://www.course-api.com/react-tours-project'

console.log(fetch(url))
// .then approach
// fetch(url)
//     .then((response)=> response.json())
//     .then((data)=> console.log(data))
//     .catch((err)=>console.log(err))

// async await approach
const getTours = async() =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

getTours()

// retrun data
const getAllTours = async() =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data // data = response.json
    }catch(err){
        console.log(err)
    }
}

console.log(getAllTours())// here we cannnot acces to the data because getAlltours return an promise we have to chaine it withe an then
console.log(getAllTours().then((data)=> console.log(data)))