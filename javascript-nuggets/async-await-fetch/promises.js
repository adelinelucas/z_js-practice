// promises is for avoid callback hell 
// async await 
// state of the promises :pending, rejected, fulfilled

// promise is a object that returns a value which you hope to receive in the future

const promise = new Promise((resolve, reject)=>{
    // resolve and reject are functions 
    resolve('hello promise')
    reject()
})

console.log(promise)
// to access resolve
promise.then((data)=>console.log(data) )

const promiseRejected = new Promise((resolve, reject)=>{
    // resolve and reject are functions 
    reject('rejected, something goes wrong')
})
console.log(promiseRejected)
// to access reject
promiseRejected.then((data)=>console.log(data) ).catch((err)=>console.log(err) )

const value = 2;
const explorePormise = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random() *3);
    console.log(random)
    if(random === value){
        resolve('you guess correctly')
    }
    reject('wrong number')
})

explorePormise.then((data)=>console.log(data) ).catch((err)=>console.log(err) )