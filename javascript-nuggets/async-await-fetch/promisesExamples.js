// callbakc hell
// after 1s frist is red
// after 2s second is blue
// ater 3s third is green

const frist= document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red', 'it turn red')
        .then((data)=>addColor(3000, '.second', 'blue', data))
        .then((data)=>{
            addColor(2000, '.third', 'green')
            console.log(data)
        })
        .catch((err)=> console.log(err))
})
// différence
// btn.addEventListener('click', ()=>{
//     addColor(1000, '.first', 'red')
//         .then(addColor(3000, '.second', 'blue'))
//         .then(addColor(2000, '.third', 'green'))
//         .catch((err)=> console.log(err))
// })

function addColor(time, selector, color, data){
    const el = document.querySelector(selector)

    return new Promise((resolve, reject) =>{
        if(el){
            setTimeout(()=>{
                el.style.color = color;
                resolve(data)
            }, time)
        }else {
            reject(`There is no such element: "${selector}".`)
        }
    })
    
}