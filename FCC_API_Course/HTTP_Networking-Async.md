## Synchronus vs Asynchronus code 

Synchronus code is simple and predictible, it execute on the order one each commande on the code. 

Asynchronus, allows us to do multiple things à the same time. We use asynchronus code only if we need it. Every time we mak n HTTP request ober the network, we need to do that asynchronusly in order to wait for the request to come back and use the data. We nedd asynchronus code so that we can keep dooing things in the meantime. 

# Synchronous vs Asynchronous 

All of the earlier courses on Boot.dev only had [synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous) code, which means code that *runs in sequence*. Each line of code executes in order, one after the next. 

![sync vs async](https://i.imgur.com/03FFGu0.png)

Example of synchronous code: 

```js
console.log("I print first");
console.log("I print second");
console.log("I print third");
```

Asynchronous or [`async`](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) code runs in *parallel*. That means code further down runs *at the same time that* a previous line of code is still running. A good way to visualize this is with the JavaScript function [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

`setTimeout` accepts a function and a number of milliseconds as inputs. It waits until the number of milliseconds has elapsed, and then it executes the function it was given.

Example of asynchronous code:

```js
console.log("I print first");
setTimeout(() => console.log("I print third because I'm waiting 100 milliseconds"), 100)
console.log("I print second");
```

# Why do we want async code?

We try to keep most of our code synchronous because it's easier to understand, and therefore often has fewer bugs. However, sometimes we *need* our code to be asynchronous. For example, whenever you update your user settings on a website, your browser will need to communicate those new settings to the server. The time it takes your HTTP request to physically travel across all the wiring of the internet is usually around 100 milliseconds. It would be a very poor experience if your webpage were to freeze while waiting for the network request to finish. You wouldn't even be able to move the mouse while waiting!

By making network requests *asynchronously*, we let the webpage execute other code while waiting for the HTTP response to come back. This keeps the user experience snappy and user-friendly.

As a general rule, we should only use async code when we need to for performance reasons. Synchronous code is simpler.

![sync vs async](https://i.imgur.com/03FFGu0.png)

# Promises in JavaScript

A Promise in JavaScript is very similar to making a promise in the real world. When we make a promise we are making a commitment to something. For example, *I promise to explain JavaScript promises to you*, my promise to you has 2 potential outcomes: it is either fulfilled, meaning I eventually explained promises to you, or it is rejected meaning I failed to keep my promise.

The [`Promise Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) represents the eventual fulfillment or rejection of our promise and holds the resulting values. In the meantime, while we're waiting for the promise to be fulfilled, our code continues executing. Promises are the most popular modern way to write asynchronous code in JavaScript.

## Declaring a Promise

Here is an example of a promise that will resolve and return the string "resolved!" or reject and return the string "rejected!" after 1 second.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved!")
    } else {
      reject("rejected!")
    }
  }, 1000)
})

function getRandomBool(){
  return Math.random() < .5
}
```

## Using a Promise

Now that we've created a promise, how do we use it?

The `Promise` object has [`.then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) and [`.catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) that make it easy to work with. Think of `.then` as the _expected_ follow-up to my promise, and `.catch` as the "something went wrong" follow-up.

If a promise *resolves*, its `.then` function will execute. If the promise rejects, its `.catch` method will execute.

Here's an example of using `.then` and `.catch` with the promise we made above:

```js
promise.then((message) => {
    console.log(`The promise finally ${message}`)
}).catch((message) => {
    console.log(`The promise finally ${message}`)
})

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!
```

# Why are Promises useful?

Promises are the cleanest (but not the only) way to handle the common scenario where we need to make requests to a server, which is typically done via an HTTP request. In fact, the [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function we were using earlier in the course returns a promise!

## I/O, or "input/output"

Almost every time you use a promise in JavaScript it will be to handle some form of I/O. I/O, or input/output, refers to when our code needs to interact with systems outside of the (relatively) simple world of local variables and functions.

Common examples of I/O include:

* HTTP requests
* Reading files from the hard drive
* Interacting with a Bluetooth device

Promises help us perform I/O without forcing our entire program to freeze up while we wait for a response.

We're making a network request right whenever we want to interact with a remote server, another machine will be doing asynchronus programming, sometimes we need to go to the hard disk of a cumputer right to the file system and read a file. 

##I/O Timings 

RAM         ---> ns  -----> Sync
for exemple create a variable, 
it's pratically imperceptible to humas, we can do it synchronously , create/update/delete variables. 

Disk         ---> 1ms -----> Async / sync
like going on the file system and reading in. for example programms have to read in configuration data, might have to fetch some data from disk. 

Network       ---> 100ms-2000ms -----> Async 
like Http request

# Promises and the "await" keyword

We have used the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword a few times in this course, it's time we finally understand what's going on under the hood.

The `await` keyword is used to *wait* for a Promise to resolve. Once it has been resolved, the `await` expression returns the value of the resolved `promise`.

Our code is actually going to bloack at this point, it's going to sit and wait until the primise resolves at which it would, save the value/ return the value of the promise. 
this allos us to write asynchronus code soo that is look like it's asynchronus. 

## Example with .then callback

```js
promise.then((message) => {
  console.log(`Resolved with ${message}`)
}).
```

## Example of awaiting a promise

```js
const message = await promise
console.log(`Resolved with ${message}`)
```

# The async keyword

While the `await` keyword can be used in place of `.then()` to *resolve* a promise, the [async keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) can be used in place of [New Promise()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) to *create* a new promise.

When a function is prefixed with the `async` keyword, it will *automatically* return a Promise. That promise resolves with the value that your code returns from the function. You can think of `async` as "wrapping" your function within a promise.

These are equivalent:

## New Promise()

```js
function getPromiseForUserData(){
  return new Promise((resolve) => {
    fetchDataFromServerAsync().then(function(user){
      resolve(user)
    })
  })
}

const promise = getPromiseForUserData()
```

## Async

```js
async function getPromiseForUserData(){
  const user = await fetchDataFromServer()
  return user
}

const promise = getPromiseForUserData()
```

If you specify that a function is asynchronus it will automatically return a new promise and the resolve value will just be whatever value was returned from the promise. 

# .then() vs await

In the early days of web browsers, promises and the `await` keyword didn't exist, so the only way to do something asynchronously was to use callbacks.

A "callback function" is a function that you hand to another function. That function then calls your callback later on. The [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function we've used in the past is a good example.

```js
function callbackFunction(){
  console.log("calling back now!")
}
const milliseconds = 1000
setTimeout(callbackFunction, milliseconds)
```

While even the `.then()` syntax is generally easier to use than callbacks without the `Promise` API, the `await` syntax makes them even easier to use. You should use `async` and `await` over `.then` and [New Promise()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) as a general rule.

To demonstrate, which of these is easier to understand?

```js
fetchUser.then(function(user){
  return fetchLocationForUser(user)
}).then(function(location){
  return fetchServerForLocation(location)
}).then(function(server){
  console.log(`The server is ${server}`)
});
```

```js
const user = await fetchUser()
const location = await fetchLocationForUser(user)
const server = await fetchServerForLocation(location)
console.log(`The server is ${server}`)
```

They both do the same thing, but the second example is so much easier to understand! The `async` and `await` keywords weren't released until *after* the `.then` API, which is why there is still a lot of legacy `.then()` code out there.


RQ : callback function : is a function that we hand to another function to be executed at a certain point in time. 