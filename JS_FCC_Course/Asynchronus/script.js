//synchronous

// console.log("I")
// console.log(" eat")
// console.log(" spoon")
// console.log(" ice cream")
// console.log(" with a")

//asynchronous

// console.log("I")
// console.log(" eat")
// setTimeout( ()=>{
//     console.log(" ice cream")
// }, 1000)
// console.log(" with a")
// console.log(" spoon")

// callback simple definition is calling a function inside à function 
// it forms connections between functions
// this connection is made by call the callback function in argument of the main funcition

// function one() {
//     console.log('step 1');
// }
// function two(){
//     console.log('step 2');
// }

// function callback( call_tow){
//     console.log('step 1 complete. place call step 2');
//     // we run our function
//     call_tow()
// }

// callback(two);

// first example
let stocks =  {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let order = (fruit_name='banana', call_production) =>{

    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();
    }, 2000)
}

// example of callback hell => promises
let production = () =>{
    setTimeout(()=>{
        console.log('production has started');
        setTimeout(()=>{
            console.log('the food has been chooped')
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log('the machine was started');
                    setTimeout(()=>{
                        console.log(`ice-cream was placed on a ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(()=>{
                                console.log('serve the ice cream')
                            }, 2000)
                        },3000)
                    }, 2000)
                }, 1000)
            },1000)
        }, 2000)
    },0000)
}

// order(0,production);

// promises helps to keep the code clean and neat, we provide instruction step by step.
/*
    Promise Circle
        promise is made

                pending
    resolve                 reject
    .then()                  .catch()
    .then()
    ... 
                .finally
*/


let is_shop_open = true;

let order2 = (time, work) =>{
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
        }else{
            reject(console.log('our shop is close !'))
        }
    })
}
/*
order2(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    // the return is mandatory, wihtout it will not work
    return order2(0000, ()=>console.log(`production has started`))
})
.then(()=>{
    return order2(2000, ()=>console.log(`the food was chopeed`))
})
.then(()=>{
    return order2(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(()=>{
    return order2(1000, ()=>console.log(`the machine was started`))
})
.then(()=>{
    return order2(2000, ()=>console.log(`ice-cream was placed on a ${stocks.holder[0]}`))
})
.then(()=>{
    return order2(3000, ()=>console.log(`${stocks.toppings[0]} was added as toppings`))
})
.then(()=>{
    return order2(1000, ()=>console.log('serve the ice cream'))
})
.catch( ()=>{ console.log('customer left ! ')})
.finally(()=>{
    console.log('day end, our shop is closed ! :)')
})
*/


// async await 
// différence between asyn/await and promises. 

/*
let orderPromiseExpl = () =>{
    return new Promise( (resolve, reject)=>{
        if(condition ){
            resolve();
        }
        else{
            reject()
        }
    })
}
orderPromiseExpl()
.then()
.tenh() 
//.... 
.catch()
.finally()
*/

// async function will work with try catch and finally to exécute code

/*
async function orderAsync () {
    try{
        await abc;
    }catch(error){
        console.log("element dosen't exist", error)
    }
    finally{
        console.log('runs code anyway')
    }
}
orderAsync()
.then( ()=>{
    console.log('we can also run then with async function ')
})


let toppingChoice = () =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                console.log('witch topping sould you love ? ')
            )
        }, 3000)
    })
}

async function kitchen() {
    console.log('A');
    console.log('B');
    console.log('C');
    await toppingChoice()
    console.log('D');
    console.log('E');
}

kitchen()
console.log('doing the dishes');
console.log('cleaning the tables');
console.log('taking others orders');
*/

function time(ms) {
    return new Promise( (resolve, reject) =>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        }else{
            reject(console.log("shop is closed !"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000);
        console.log('start production')

        await time(2000);
        console.log('cut the fruits')

        await time(2000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000);
        console.log('the machine was started')

        await time(3000);
        console.log(`${stocks.toppings[0]} was added as toppings`)

        await time(2000);
        console.log('serve the ice cream')

    }catch(error){
        console.log('Customers left ! ', error)
    }finally{
        console.log('Day ended, shop is closed')
    }
}

kitchen();