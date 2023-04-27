// callback function is a function that we passe as an arguement, execute it later
function makeUpperCase(value){
    console.log(value.toUpperCase());
}
makeUpperCase('peter')

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name, cb){
    const fullName = `${name} smith`;
    // we invoke the function inside the function not in the parameters
    cb(fullName)
    cb(fullName)
    cb(fullName)
}

handleName('peter', makeUpperCase)
handleName('peter', reverseString)
// callback function allow more flexibility in our function and to have various effect

handleName('susan', function(value){console.log(`${value} in callback`)})

handleName('susan', (value)=> console.log(`${value} in arrow function callback`))

// 
const btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click', ()=>{
    console.log('click on the button')
})