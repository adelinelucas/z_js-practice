// async / await
// async/await allows us to write async code in synchronus way
// async must be present, always returns a promise
// await waits until promise is setteld
// error handeling - try/catch block

// async function in const function
const example = async () => {
    return 'hello there'
}
//console.log(example())

async function someFunc(){
    // we have a synchronus code, beacause we waiting for the result of example
    // but we write it in synchronus fashion
    const result = await example()
    console.log(result)
    console.log('hello world')
}
someFunc();
console.log("==================")
const users = [
    {id:1, name:'john'},
    {id:2, name:'susan'},
    {id:3, name:'anna'},
];
const articles = [
    {userId:1, articles:['one', 'two','three']},
    {userId:2, articles:['four', 'five']},
    {userId:3, articles:['six', 'seven','eight', 'nine']},
]



function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user?.name === name)

        if(user){
            return resolve(user)
        }else{
            reject(`There no such user with name : ${name}`)
        }
    })
}

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user)=> user?.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject(`Wrong id : ${userId}`)
        }
    })
}
// getUser('susan')
// getUser('Joey')

// .then approach 
getUser('susan')
    .then((user)=> console.log(user))
    .catch((err)=> console.log(err))

getUser('susans')
    .then((user)=> console.log(user))
    .catch((err)=> console.log(err))

getUser('anna')
    .then((user)=> getArticles(user.id))
    .then((articles)=> console.log(articles))
    .catch((err)=> console.log(err))


// async await approach

const getData = async(username) => {
    try{
        const user = await getUser(username)
        console.log("==================")
        console.log(user)
        if(user){
            const articles = await getArticles(user.id)
            console.log("==================")
            console.log(articles);
        }
    }catch(err){
        console.log(err)
    }
}

getData('johns')
getData('john')