### HTTP 
Hyper text transfer protocol
HTTP is the most popular protocol for communicating online. 

### Protocol 
allow to communication between machines, is a set of rules have agreed upon. 
HTPP Request & Responses. 
At the heart of HTPP is a simple request-response system, te requesting computer, alos know as the client asks another computer for some information. That computer, "the server", sends backs a response withe the information tat was requested. 
In some up we pose question and have response, it's a communication. 

### HTPP powers websites 
HTPP is a protocol designed to transfer information between computers. There are other protocols for communication over the internet, but HTTP is the mot popular. 

JSON is a common way to get raw data from an URL. 

### HTTP urls
A URL, Uniform Ressource Locator, is essentially the adress of another computer or "server" on the internet. Part of the URL specifies how to reach the server and part of it tells the server what information we want. 

For now, it's important to understand that a URL represents a piece of information on another computer that we want access to. We can get access to it by making a *request*, and reading the *response* that the server replies with.

# Using URLs in HTTP

The `http://` at the beginning of a [website URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) specifies that the `http` protocol will be used for communication.

![http in url](https://i.imgur.com/6jiaXBn.png)

Other communication protocols use URLs as well, (hence "Uniform Resource Locator"). That's why we need to be specific when we're making HTTP requests by prefixing the URL with `http://`
Http is used to say to the server along witch protocol we will do our request. 

### Clients & Server 
Client : Front end 
Server : back end

A server can also be a client, expl for requesting a youtube video + comment 

    Client -------> Request to server of Youtube        -----------> Request to a server
                    the video                                        which store the comments
                    but also want to have the comments  
                                                                    
    Response<------ Send the 2 responses               <----------- Response
    to client 

* A "client" is a computer making an HTTP request
* A "server" is a computer responding to an HTTP request
* A computer can be a client, a server, both, or neither. "Client" and "server" are just words we use to describe what computers are doing within a communication system.
* Clients send requests and receive responses
* Servers receive requests and send responses

### FETCH API 
Fetch API is a set of a built-in functions and tools that we can use when we're coding with JS in order to make HTTP request. 
In HTPP request, we have a lot informations: headers/ body...  And fetch help us to not have to create a complex function in order to send every infromation needed, only the url we want. 

The server will respond to us in JSON data

## Using fetch

```js
const response = await fetch(url, settings) // await is essential, beacause the request to the server will take time so we have to wait te reponse, and then reponse is defined. 
const responseData = await response.json() //==> allow  to us to take JSON and parse it into an actual JS object in our code, in order to manupulate and use the data
```
The response data is a Javascript Ojbect withe key value pairs. 

We'll go in-depth on the various things happening in this standard `fetch` call later, but let's cover some basics for now.

* `response` is the data that comes back from the server
* `url` is the URL we are making a request to
* `settings` is an object containing some request-specific settings
* The `await` keyword tells JavaScript to wait until the request comes back from the server before continuing
* `response.json()` converts the response data from the server into a JavaScript object

## Assignment

Fix the bug in the code.

The problem is that we aren't waiting for the response to physically come back across the internet connection before continuing with our code.


### Fetch API 
Fetch API is a set a built-in function and tools that we can use in JS Code.

# Web Servers

Up to this point, most of the data you have worked with in your code has simply been generated and stored locally in variables.

While you'll always use variables to store and manipulate data while your program is running, most websites and apps use a web server to store, sort, and serve that data so that it sticks around for longer than a single session, and can be accessed by multiple devices.

## Listening and serving data

Similar to how a server at a restaurant brings your food to the table, a [web server](https://en.wikipedia.org/wiki/Web_server) serves web resources, such as web pages, images, and other data. The server is turned on and "listening" for inbound requests constantly so that the second it receives a new request, it can send an appropriate response.

## The server is the back-end

While the "front-end" of a website or web application is the device the user interacts with, the "back-end" is the server that keeps all the data housed in a central location.

## A server is just a computer

"Server" is just the name we give to a computer that is taking on the role of serving data across a network connection. A good server is turned on and available 24 hours a day, 7 days a week. While your laptop *can* be used as a server, it makes more sense to use a computer in a data center that's designed to be up and running constantly.

