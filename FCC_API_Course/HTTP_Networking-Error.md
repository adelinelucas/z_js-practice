### Errors 

for example if you're running somme JS on computer and you lose Internet connection you're won't be able to fetch data from a server, because you don't have internet connection. 
Errors handling allows us to detect that somesthing's wrong and handle it. 

# Error handling in JavaScript

When something goes wrong while a program is running, JavaScript uses the `try/catch` paradigm for handling those errors. Try/catch is fairly common, Python uses a similar mechanism.

## First, an error is thrown

For example, let's say we try to access a property on an undefined variable. JavaScript will automatically "throw" an error.

```js
const speed = car.speed
// The code crashes with the following error:
// "ReferenceError: car is not defined"
```

## Trying and catching errors

By wrapping that code in a try/catch block, we can handle the case where `car` is not yet defined.

```js
try {
  const speed = car.speed
} catch (err) {
  console.log(`An error was thrown: ${err}`)
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}
```

# Bugs vs Errors

    Bugs                                             Errror
    bad,                                                not always bad
    we have unexpected thing running                    expected, our job is to handle error  
    on our code                                         and fix it 
    expl add(x,y)->z                                    no internet connection
    add(2,3)->7                                         remote server is down
                                                        user input
bugs are to be handle
error have to be handle. 

Error handling via try/catch is **not** the same as debugging. Likewise, errors are **not** the same as bugs.

* Good code with no bugs can still produce errors that are gracefully handled
* Bugs are, by definition, bits of code that aren't working as intended

## Debugging

"Debugging" a program is the process of going through your code to find where it is not behaving as expected. Debugging is a manual process performed by the developer.

Examples of debugging:

* Adding a missing parameter to a function call
* Updating a broken URL that an HTTP call was trying to reach
* Fixing a date-picker component in an app that wasn't displaying properly

Debbuger are optionnals, they are tools that we can use to help us debug our code. 

## Error handling

"Error handling" is code that can handle *expected* edge cases in your program. Error handling is an automated process that we design into our production code to protect it from things like weak internet connections, bad user input, or bugs in other people's code that we have to interface with.

Examples of error handling:

* Using a try/catch block to detect an issue with user input
* Using a try/catch block to gracefully fail when no internet connection is available

## In short, don't use try/catch to try to handle bugs

If your code has a [bug](https://en.wikipedia.org/wiki/Software_bug), try/catch won't help you. You need to just go find the bug and fix it.

If something out of your control can produce issues in your code, you should use try/catch or other error-handling logic to deal with it.

For example, there could be a prompt in Fantasy Quest for users to type in a new character name, but we don't want them to use punctuation. Validating their input and displaying an error message if something is wrong with it would be a form of "error handling".

# async/await makes error handling easier

`try` and `catch` are the standard way to handle errors in JavaScript, the trouble is, the original Promise API with `.then` didn't allow us to make use of `try` and `catch` blocks.

Luckily, the `async` and `await` keywords *do* allow it, yet another reason to prefer the newer syntax.

## .catch() callback on promises

The [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method works similarly to the .then() method, but it fires when a promise is *rejected* instead of resolved.

## Example with .then and .catch callbacks

```js
fetchUser().then(function(user){
  console.log(`user fetched: ${user}`)
}).catch(function(err){
  console.log(`an error was thrown: ${err}`)
});
```

## Example of awaiting a promise

```js
try {
  const user = await fetchUser()
  console.log(`user fetched: ${user}`)
} catch (err) {
  console.log(`an error was thrown: ${err}`)
}
```

As you can see, the `async/await` version looks just like normal `try/catch` JavaScript!

Unhandle JS errors can just kill execution. 