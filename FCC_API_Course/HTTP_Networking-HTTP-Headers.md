# What are HTTP Headers?

An [HTTP header](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_header) allows clients and servers to pass *additional* information with each request or response. Headers are just case-insensitive [key-value pairs](https://en.wikipedia.org/wiki/Name%E2%80%93value_pair) that pass additional [metadata](https://en.wikipedia.org/wiki/Metadata) about the request or response.

The body of HTTP request is used to transport the information/ data itself.
But metadata, which is what headers are typically used for, is like data about the data. It's not the information we really care about, which would be included in the body, it's additionnal information that the server can use to figure certain things out( like location, )

HTTP requests from a web browser carry with them many headers, including but not limited to:

* The type of client (e.g. Google Chrome)
* The Operating system (e.g. Windows)
* The preferred language (e.g. US English)

As developers, we can also define custom headers in each request.

## Headers API

The [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the `Request.headers` and `Response.headers` properties. 

## Content type
content-type is commun headers in http request, and it's whole purpose is to tell whate type of data is being sent in the body. (json data / html data / css/plain text .... )

# Using the Browser's Developer Tools

Modern web browsers offer developers a powerful set of *developer tools*. The [Developer Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) are a front-end web developer's best friend! For example, using the dev tools you can:

* View the web page's JavaScript console output
* Inspect the page's HTML, CSS, and JavaScript code
* View network requests and responses, along with their headers.

The method for accessing dev tools varies from browser to browser. If you're on Chrome, you can just right-click anywhere within a web page and click the "inspect" option. Follow this link for more info on [how to access dev tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#:~:text=How%20do%20you%20pull%20it%20up%3F%20Three%20ways%3A).

## The network tab

While all of the tabs within the dev tools are very useful we will be focusing specifically on the *Network tab* in this chapter so we can play with HTTP headers. The Network tab monitors your browser's network activity and records all of the requests and responses the browser is making, including how long each of those requests and responses takes to fully process. If you navigate to the Network tab and don't see any requests appear try refreshing the page!

![Network Tab](https://i.imgur.com/STKdceG.png)

Network tab recourds all network activity that's being done by the browser. 

Another usecase for header is authentification of the users. 

# Why are headers useful?

Headers are useful for several reasons from design to security, but most often headers are used as [metadata](https://en.wikipedia.org/wiki/Metadata) or data *about* the request. So, for example, let's say we wanted to ask for a player's level from the Fantasy Quest server. We need to send that player's ID to the server so it knows which player to send back the information for. That ID *is my request*, it's not information *about my request*.

A good example of a use case for headers is [authentication](https://auth0.com/intro-to-iam/what-is-authentication/). Often times a user's credentials are included in request headers. Credentials don't have much to do with the request *itself*, but simply authorize the requester to be allowed to make the request in question.

We can send headers to the server, the server can also send back header. it's working in both ways. 
Status code : Status code are numeric value, but when you"re working with headers we typically parse them as strings because that's what they are. In cases you may need to cast headers from strings to numbers if you want to deal with then as numbers. 

