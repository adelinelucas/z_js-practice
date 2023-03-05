## API 

API : application programming interface. 
I : interface : an interface allow me to controlled the way that the programme function through the option, even if I don't know how it's work internally. 
some times the interface is so reconazable that turn into GUI. Graphic User interface. 
Interfaces define ways for us to interact or communicate with an object, wheter that object is phyiscal or software.


API is made for programmer tu use and extend in their applications. 

An API is like a contract, it defines how to use it , and what data expect to reveice by using it. 
### Rest : representation state a transfert
the arrival of rest API help to have rules to create and use API. It bring an abstraction that allow to fixe rules in order to develop and use API. Rest has changed everything that a lot of API are rest API. 
Rest if not the and. 
Graph QL. 
When a API embrace the Rest style and rules we talk about RESTful API. Rest in on top of all technologies. 

### How the web Work
A browser is a web client : => we connect to a server. we connect to a site to an universal ressource location, => the adress we tiping in the search bar of the broswer. 
URL ==> universal ressource location or superset term URI : Universal Ressource Identifier URI. 

Our url has a scheme protion: HTTP / HTPPS stands for hypertext transfer protocol. 
a protocol is also a sort of contact, it define the expectations of how to communicate
The url create a requesto along withe the URI and also specifie a particular HTTP verb  for expl a GET verb. The server receive the request and send a response to the browser, the server response contain a body. For a webpage, the body of the response contains the HTML, hypertext markup language. 

** HTTP verb **
GET / POST / PUT / PATCH /DELETE

HTTP is a stateless protocol. 
We alos have the verb POST : submitting or posting data to the server. 

The HTTP is more complex we can pass more data :
    - we can pass parameter in url with query string,
    - we can specify values in the header with a pairs 
For exemple you can specify in the heade the type of data that you expecting 'Content-type', or get the page if it has been in a long time (why get a page that you have in you cached)
Both request and response have headers . 
You can ambed authentification information in each request using a header. 

In the response, one important info is the status code, this lets us konw what happend on the server side. 

### Rest 
REST : stand for Representational State Transfer. 
Guigind arrchitectural constaints requires for restful API : 
    - client server architecture
    - statelessness
    - cacheadbility
    - layered System
    - code on demand
    - uniform interface

When doing a request, the server won't keep in track info, so if you have to pass authentifications info you passe it through the headers. 
When we do a request, we look for a ressource, (ressource to reference to an object). Mots of what we want our applications to be able to do can to the ressource be express to through the word CRUD : create, read, update, delete. 

the body these days is express as JSON (Javascript Object Notation). 
### JSON 
JSON provides a great way to structure and nest the data. 

### Curl 
Curl is an open source tool that is used to send data back and forth and it runs locally on your computer. 
Curl is a command that we can run from our terminal, you have to install it frist. 