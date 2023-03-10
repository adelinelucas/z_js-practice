# URL Paths

The URL Path comes right after the domain (or port if one is provided) in a URL string.

In this URL, the path is `/root/next`:

`http://testdomain.com/root/next`

## What paths meant in the early internet

In the early days of the internet, and sometimes still today, many web servers simply served raw files from the server's file system. For example, if I wanted you to be able to access some text documents, I could start a web server in my `documents` directory. If you made a request to my server you would be able to access different documents by using the path that matched my local file structure.

If I had a file in my local `/documents/hello.txt`, you could access it by making a `GET` request to `http://example.com/documents/hello.txt`.

## How paths are used today

Most modern web servers don't use that simple mapping of `URL path` -> `file path`. Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexibility. Some common examples of what paths are used for include:

* The hierarchy of pages on a website, whether or not that reflects a server's file structure
* Parameters being passed into an HTTP request, like an ID of a resource
* The version of the API
* The type of resource being requested

# RESTful APIs

[Representational State Transfer, or REST,](https://developer.mozilla.org/en-US/docs/Glossary/REST) is a popular convention that HTTP servers follow. Not all HTTP APIs are "REST APIs", or "RESTful", but it is *very* common.

RESTful servers follow a loose set of rules that makes it easy to build reliable and predictable web APIs. REST is more or less a set of conventions about how HTTP *should* be used.

## Separate and agnostic

The client can be written in any programming language / the server can be written in a different programming language. 
The big idea behind REST is that resources are transferred via well-recognized, language-agnostic client/server interactions. A RESTful style means the implementation of the client and server can be done independently of one another, as long as some simple standards, like the names of the available resources, have been established.

## Stateless

A RESTful architecture is *stateless*, which means the server does not need to know what state the client is in, nor does the client need to know what state the server is in. Statelessness in REST is enforced by interacting with *resources* instead of *commands*. Keep in mind, this doesn't mean the applications are stateless - on the contrary, what would "updating a resource" even mean if the server wasn't keeping track of its state?

## Paths in REST

In a RESTful API, the last section of the `path` of a URL should specify which resource is being accessed. Then, as we talked about in the "methods" chapter, depending on whether the request is a `GET`, `POST`, `PUT` or `DELETE`, the resource is read, created, updated, or deleted.

The *Fantasy Quest* API we have been working with is a RESTful API! Take a look at the URLs we've been using:

* `https://api.boot.dev/v1/courses_rest_api/learn-http/locations`
* `https://api.boot.dev/v1/courses_rest_api/learn-http/users`
* `https://api.boot.dev/v1/courses_rest_api/learn-http/items`

The first part of the path specifies the *version*. In this case, version 1, or `v1`.

The second part of the path tells our server that this is a REST API for the "learn http" course.

Finally, the last part denotes which *resource* is being accessed, be it a `location`, `user`, or `item`.

# URL Query Parameters

a URL's query parameters appear next in the URL structure but are *not* always present - they're optional. For example:

[https://www.google.com/search?q=boot.dev](https://www.google.com/search?q=boot.dev)

`q=boot.dev` is a query parameter. Like headers, query parameters are `key / value` pairs. In this case, `q` is the key and `boot.dev` is the value.

The query parameters in the URL come after the question mark and their key value pairs. 
    "?key=value"

In RESTful servers, query parameters are very often used in get request to kind of change the way that data is sent back to us from the server. 

# The Documentation of an HTTP Server

You may be wondering:

> How the heck am I supposed to memorize how all these different servers work???

The good news is that *you don't need to*. When you work with a backend server, it's the responsibility of that server's developers to provide you with instructions, or *documentation* that explains how to interact with it. For example, the documentation should tell you:

* The domain of the server
* The resources you can interact with (HTTP paths)
* The supported query parameters
* The supported HTTP methods
* Anything else you'll need to know to work with the server

![read the docs](https://i.imgur.com/GIlWhYF.jpg)

## The server has control

As we mentioned earlier, the server has complete control over how the path in a URL is interpreted and used in a request. The same goes for query parameters. Not all servers support query parameters for every type of request, it just depends, so you'll need to consult the docs.

When working with a backend server, you will need access to tThe server's API documentation.

# Multiple Query Parameters

We mentioned that query parameters are `key/value` pairs - that means we can have multiple pairs!

`http://example.com?firstName=lane&lastName=wagner`

In the example above:

* `firstName` = `lane`
* `lastName` = `wagner`

The `?` separates the query parameters from the rest of the URL. The `&` is then used to separate *every pair* of query parameters after that.



