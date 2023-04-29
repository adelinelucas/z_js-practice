// callbakc hell
// after 1s frist is red
// after 2s second is blue
// ater 3s third is green

const frist= document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    console.log('hello world')
    setTimeout(()=>{
        frist.style.color = 'red'
    }, 1000)
    setTimeout(()=>{
        second.style.color = 'blue'
    }, 3000)
    setTimeout(()=>{
        third.style.color = 'green'
    }, 2000)
})

// in sequence !!!
btn.addEventListener('click', ()=>{
    console.log('hello world')
    setTimeout(()=>{
        frist.style.fontSize = '70px';
        setTimeout(()=>{
            second.style.fontSize = '35px'

            setTimeout(()=>{
                third.style.fontSize = '150px'
            }, 2000)
        }, 3000)
    }, 1000)   
})