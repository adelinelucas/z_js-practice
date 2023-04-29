// boucing is a programming technique used in JS to improve the performance of certain functions that are repetadly called. 
// expl search function after user is typing.

// delay logic
// so it runs 2s after last click
// setTimeout returns id, which pass into clearTimeout
const btn = document.querySelector('.btn')

const debounceStep1 = ()=>{
    setTimeout(()=>{
        console.log('you clicked the button')
    },2000)
}
// btn.addEventListener('click', ()=>{
//     console.log('you clicked me')
// })

// step one, we use a setimeout but we continue to execute the function every time we clicked on the button
btn.addEventListener('click', debounceStep1)

// use the id of the setTimeout to clear the setTimeout and delay the execution

const debounce = ()=>{
    let timeoutID;
    return ()=>{
        console.log(timeoutID)
        clearTimeout(timeoutID)
        timeoutID = setTimeout(()=>{
            console.log('you clicked the button !!!')
        },2000)
    }
}

btn.addEventListener('click', debounce())

