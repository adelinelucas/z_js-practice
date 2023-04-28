// at() - takes integer and returns the items at that index - string, array

// top level await - basic example

const scores = [99,454,78,45]
const oldLast = scores[scores.length -1]
console.log(oldLast);
const newLast = scores.at(-1)
console.log(newLast)

const channel = 'Codding Addict'
console.log(channel.at(0))

// top level await available only on modules
// we don't have to wrap in async function in order to use await
//script src="./app.js" type="module"></script>
const url = 'https://www.course-api.com/react-tours-project';
//old version
const fetchData = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

fetchData()
fetch(url)
    .then((resp)=> resp.json())
    .then((data)=> console.log(data))

/////////
// since es2022
const response = await fetch(url)
const data = await response.json()
console.log(data)