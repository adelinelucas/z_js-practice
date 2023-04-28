// Fetch errors 
// only throws error if cannot resolve
// error response still a response (400/500)
// response 400/500 signify there is error in the data send by the server, but for fetch it is valid response that will not throw any error. 
// and allow you to continue to excecute your code. 

const url= 'https://www.course-api.com/react-tours-project'
const wrongURL ='https://www.course-api.com/react-tours-projectt'
const getTours = async() =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
} 

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)

const getToursWrongURL = async() =>{
    try{
        const response = await fetch(wrongURL)
        console.log(response)
        if(!response.ok){
            const msg = `There was an error "${response.status} ${response.statusText}"`;
            throw new Error(msg)
        }
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
btn.addEventListener('click', getToursWrongURL)