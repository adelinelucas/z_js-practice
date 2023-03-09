Every time we send HTTP request, we have to specify an HTTP method. 
GET
HEAD
POST
PUT
DELETE
CONNECT
OPTIONS


# HTTP Methods - GET

It get stuff, it gets representations or copies of stuff from a server. Getting information, it's considere safe, we don't add change to the server. 

HTTP defines a set of [methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that we use every time we make a request. We have used some of these methods in previous exercises, but it's time we dive into them and understand the differences and use cases behind the different methods.

## The GET method

The [GET method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) is used to 'get' a *representation* of a specified resource. You are not taking the data away from the server, but rather *getting* a representation, or copy, of the resource in its current state. A get request is considered a [*safe*](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP) method to call multiple times because it doesn't alter the state of the server.

## Making a GET request using the Fetch API

In this course, we have been and will continue to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. The [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method accepts an optional `init` object parameter as its second argument that we can use to define things like:

* `method`: The HTTP method of the request, like `GET`.
* `headers`: The headers to send.
* `mode`: Used for security, we'll talk about this in future courses.
* `body`: The body of the request. Often encoded as JSON.

Example `GET` request using fetch:

```js
await fetch(url, {
  method: 'GET',
  mode: 'cors', // use for that the browser doesn't kill our request for security purposes. 
  headers: {
    'sec-ch-ua-platform': 'macOS'
  }
})
```
In get method we don't have a body, because we send nothing, we get the representation of the state of the data. 

## CRUD
Create : POST
Read : GET
Update : PUT / PATCH
Delete : DELETE

This is a convention, there not reason a server can't use a get request to create a ressource. However, the convention in HTTP, specificallly kind of RESTful servers, is to map kind of the create, read, update and delete to these specific methods. 

# Why do we use HTTP methods?

As we touched on in the last exercise, the primary purpose of HTTP methods is to indicate to the server what we want to do with the resource we're trying to interact with. At the end of the day, an HTTP method is just a string, like `GET`, `POST`, `PUT`, or `DELETE`, but by *convention*, backend developers almost always write their server code so that the methods correspond with different "CRUD" actions.

The "CRUD" actions are:

* Create
* Read
* Update
* Delete

The bulk of the logic in most web applications is "CRUD" logic. The web interface allows users to create, read, update and delete various resources. Think of a social media site - users are basically creating, reading, updating and deleting their social posts. They are also creating, reading, updating and deleting their user accounts. It's CRUD all the way down!

As it happens, the 4 most common HTTP methods map nicely to the CRUD actions:

* `POST` = create
* `GET` = read
* `PUT` = update
* `DELETE` = delete

# POST Requests

An [HTTP POST request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) sends data to a server, typically to create a new resource. The `body` of the request is the *payload* that is being sent to the server with the request, its type is indicated by the `Content-Type` header.

## Adding a body

The `body` of the request is the *payload* that is being sent to the server with the request, its type is indicated by the `Content-Type` header - for us, that's going to be JSON. `POST` requests are generally *not* safe methods to call multiple times, because it alters the state of the server. You wouldn't want to accidentally create 2 accounts for the same user, for example.

```js
await fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
```

# HTTP Status Codes

Status code allows us to konw if everything went right to the server. 
the first thing that we typically check is if errer was produced. 

If something went wrong with the request we will have an Error 
If something went wrong with the server we will know throw the status code.
That why we have to check 2 elements, error and status code because they describe differents cases.  

Now that we understand how to write HTTP requests from scratch, we need to learn how to ensure that the server is doing what we want. Earlier in the course, we learned about how to access the browser's *developer tools* and use those tools to inspect HTTP requests. We can use that same process to check on the requests we are making and verify what they are doing so we can address potential problems.

## Status Codes

When looking at requests we can check on the `Status Code` of the request to get some information if the request was successful or not.

* `100-199`: Informational responses. These are very rare.
* `200-299`: Successful responses. Hopefully, most responses are 200's!
* `300-399`: Redirection messages. These are typically invisible because the browser or HTTP client will automatically do the redirect. (expl if you wisited a link that doesn't end up taking you to the URL in your browser that you visually saw, you likley were redirected through a 300 level status code.)
* `400-499`: Client errors. You'll see these often, especially when trying to debug a client application (not authenticated, no permission,you formatted something improperly )
* `500-599`: Server errors. You'll see these sometimes, usually only if there is a bug on the server.

Here are some of the most common status codes, but you can see a [full list here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) if you're interested.

* `200` - OK. This is by far the most common code, it just means that everything worked as expected.
* `201` - Created. This means that a resource was created successfully. Typically in response to a `POST` request.
* `301` - Moved permanently. This means the resource was moved to a new place, and the response will include where that new place is. Websites often use `301` redirects when they change their domain name, for example.
* `400` - Bad request. A general error indicating the client made a mistake in their request.
* `403` - Unauthorized. This means the client doesn't have the correct permissions. Maybe they didn't include a required authorization header, for example.
* `404` - Not found. You'll see this on websites quite often. It just means the resource doesn't exist.
* `500` - Internal server error. This means something went wrong on the server, likely a bug on their end.

## You don't need to memorize them

You need to know the basics, like "2XX is good", "4XX is a client error", and "5XX is a server error". That said, you don't need to memorize all the codes, they're easy to look up.

The `.status` property on a Response object will give you the code.
```js
async function getUserCode(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.status
}
```

# HTTP PUT

The HTTP [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) method creates a new resource or replaces a representation of the target resource with the contents of the request's `body`. In short, it updates a resource's properties.

```js
await fetch(url, {
   method: 'PUT',
   mode: 'cors',
   headers: {
   'Content-Type': 'application/json'
   },
   body: JSON.stringify(data)
})
```

## POST vs PUT
Put can create a ressource : expl the action on the server is to create it if doesn't exist or update if it does exist. 

You may be thinking `PUT` is similar to `POST` or `PATCH`, and frankly, you'd be right! The main difference is that PUT is meant to be [idempotent](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent), meaning multiple identical PUT requests *should* have the same effect on the server. In contrast, several identical `POST` requests would have additional side effects, such as creating multiple copies of the resource.

idemptent : you souh be able to send a put request multiple times without creating multiple ressources. it is possible beacause you generally include the id of the element you are updating. 

# HTTP Patch vs PUT

You may encounter [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) methods from time to time. While it is not nearly as common as the other methods, like `PUT`, it's important to know about it and what it does. The `PATCH` method is intended to *partially* modify a resource.

Long story short, `PATCH` isn't nearly as popular as `PUT`, and many servers, even if they allow partial updates, will still just use the `PUT` method for that.

the intended difference for these 2 HTTP methods was that put would swap out entire ressources or update entire ressource. Patch would just update partial sections of a ressource. 
PUT typically updates entire resources, while PATCH updates a partial resource.

# HTTP Delete

The `delete` request does exactly as you would expect: it deletes a specified resource.

### Example of HTTP DELETE

```js
// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'

await fetch(url, {
  method: 'DELETE',
  mode: 'cors'
})
```

