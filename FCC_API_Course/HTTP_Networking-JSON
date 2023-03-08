# JSON Parsing

JavaScript Object Notation, or [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON), is a standard for representing *structured* data based on JavaScript's object syntax.

JSON is commonly used to transmit data in web apps using HTTP. The HTTP `fetch()` requests we have been using in this course have been returning *Fantasy Quest* locations, users, and items as [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) data!

## JSON Syntax

JSON is a very flexible way to send structured data as plain text.  
For a developer is easy to work with this data, you have to parse it into you program an work with that datas as variables. 
Because we already understand what JavaScript objects look like, understanding JSON is easy! JSON is just a stringified JavaScript object. The following is valid JSON data:

```js
{
    "movies": [
        {
            "id": 1,
            "genre": "Action",
            "title": "Iron Man",
            "director": "Jon Favreau"
        },
        {
            "id": 2,
            "genre": "Action",
            "title": "The Avengers",
            "director": "Joss Whedon"
        }
    ]
}
```

## Parsing HTTP Responses as JSON

JavaScript provides us with some easy tools to help us work with JSON. After making an HTTP request with the [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), we get a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response). That response object offers us some methods that help us interact with the response. One such method is the [`.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method. The `.json()` method takes the response stream returned by a fetch request and returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves into a JavaScript object parsed from the JSON body of the HTTP response!

```js
const resp = await fetch(...)
const javascriptObjectResponse = await resp.json() // json method is responsible for parsing kind of the textual. JSON -> JS object with we can use. 
```

## Note

It's important to note that the result of this method is *NOT* JSON. It is the result of taking JSON data from the HTTP response body and parsing that input into a JavaScript Object.

# JSON Review

JSON is a *stringified representation* of a JavaScript object, which makes it perfect for saving to a file or sending in an HTTP request. 
Remember, an actual JavaScript object is something that exists only within your program's variables. If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.

## It's not just used in JavaScript

Just because JSON is called *JavaScript* Object Notation doesn't mean it's only used by JavaScript! JSON is a common standard that is recognized and supported by every major programming language. For example, even though Boot.dev's backend is written in Go, we still use JSON as the communication format between the front-end and backend.

## Common use-cases

* In HTTP request and response bodies
* As formats for text files. `.json` files are often used as configuration files.
* In NoSQL databases like MongoDB, ElasticSearch and Firestore


JSON is a : Format for communicating and storing data

# Sending JSON

`JSON` isn't just something we get from the server, we can also *send* JSON data!

In JavaScript, two of the main methods we have access to are [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), and [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

## JSON.stringify()

`JSON.stringify()` is particularly useful for *sending* JSON.

As you may expect the JSON `stringify()` method does the opposite of parse. It takes a JavaScript object or value as input and converts it into a string. This is useful when we need to serialize the objects into strings to send them to our server or store them in a database.

# Parsing JSON

## Parse

The [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method takes a JSON string as input and constructs the JavaScript value/object described by the string. This allows us to work with the JSON as an object!

```js
const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj = JSON.parse(json)

console.log(obj.title)
// Avengers Endgame
```

## Assignment

It's common for developers to write local tests using mock (or fake) data that looks like real data. Let's ensure that the JSON format that the backend Fantasy Quest developers provided to us is valid JSON! It would be a shame to write a bunch of code just to find out the backend has given us the wrong format.

Complete the `parseLocation` function. Use a [try/catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to safely call `JSON.parse` on the `locationString` provided. Keep in mind that `JSON.parse` throws an error if it is given a string that isn't valid JSON.

If you can parse the string successfully, use the `printLocationObj` function to print the parsed object. If an error was thrown, just log `invalid json string` to the console.

# XML

XML is JSON alternative. JSON is used in more modern applications. 

We can't talk about JSON without mentioning [XML](https://en.wikipedia.org/wiki/XML#:~:text=Extensible%20Markup%20Language%20(XML)%20is,%2Dreadable%20and%20machine%2Dreadable.). Extensible Markup Language, or `XML` is a text-based format for representing structured information, just like JSON - it just looks a bit different.

## XML syntax

XML is a markup language like [HTML](https://en.wikipedia.org/wiki/HTML), but it's more generalized in that it does *not* use predefined tags. Just like how in JSON an objects' keys can be called anything, XML tags can also have any name.

### XML Example

```xml
<root>
  <id>1</id>
  <genre>Action</genre>
  <title>Iron Man</title>
  <director>Jon Favreau</director>
</root>
```

### The same data but in JSON form:

```json
{
  "id": "1",
  "genre": "Action",
  "title": "Iron Man",
  "director": "Jon Favreau"
}
```

# Why use XML?

XML and JSON both accomplish similar tasks, so which should you use?

Both XML and JSON are use for send HTTP request, 
    - transfer data from one system to another
    - configuration files,

XML used to be used for the same things that today JSON is used for. Configuration files, HTTP bodies, and other data-transfer use cases can work just fine using JSON or XML. My advice is that generally speaking if JSON works, you should favor it over XML these days. JSON is lighter-weight, easier to read, and has better support in most modern programming languages.

There are some cases where XML might still be the better, or maybe even the *necessary* choice, but those cases will be rare.
