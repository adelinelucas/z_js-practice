### URI  Uniform Resource Identifiers

URI is a super set or url.![URI](https://i.imgur.com/VzqzckC.png)
it contains URI =  URN (uniform ressource name) + URL (uniform ressource locator ) 

URN and URI can refer to other things that aren't necessarily accessible via the internet. 

RQ: URL is a valid URI. 

We briefly touched on URLs earlier, let's dive a little deeper into the subject.

A [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier), or Uniform Resource *Identifier*, is a unique character sequence that identifies a resource that is (almost always) accessed via the internet. 

Just like JavaScript has syntax rules, so do URIs. These rules help ensure uniformity so that any program can interpret the meaning of the URI in the same way.

URIs come in two main types:

* [URLs](https://en.wikipedia.org/wiki/URL)
* [URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name)

We will focus specifically on URLs in this course, but it's important to know that URLs are only one kind of URI.

![URI](https://i.imgur.com/VzqzckC.png)

# Sections of a URL

URLs have quite a few sections, some of which are required, others not.

## Assignment

Let's use the [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) again. This time, we'll parse a URL and print all the different parts. We'll learn more about each part later, for now, let's just split and print a URL!

Complete the `printURLParts` function. It should print all the parts of a URL. For example, given this URL:

`http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash`

Your code should print:

```
protocol: 
// username: testuser
// password: testpass, 
hostname: testdomain.com
port: 8080
pathname: /testpath  
search: ?testsearch=testvalue 
hash: #testhash
```

Use the following properties on the URL object:

* `protocol`    // http:  can ba also a postgres for a DB connection / 
* `username`    // you include the @ when you use a password and username in the url. 
* `password`    // we always use port for a htpp request, but they are default. 
                So for the HTTP protocol we use for example the port 80
                HTTPS default ports to part 443
* `hostname`
* `port`
* `pathname`    // depending on the parth in the url, you will navigate to a different page.
* `search`      // search or query parameters  Start with a question mark and then it's a set of key value pairs. 
* `hash`        // hash or fragment is use to kind of link to a specific section on a page. 

# Further dissecting a URL

There are 8 main parts to a URL, though not all the sections are always present. Each piece plays a specific role in helping clients locate the specified resource.

The 8 sections are:

![sections of a url](https://i.imgur.com/iI3sUVh.png)

* The protocol is required
//* Usernames and passwords are optional
 * A domain is required
* The default port for a given protocol is used if one is not provided
* The default (`/`) path is used if one isn't provided
* A query is optional
* A fragment is optional

## Don't get too hung up on memorizing this stuff

Because names for the different sections are often used interchangeably, and because not all the parts of the URL are always present, it can be hard to keep things straight.

Don't worry about memorizing this stuff! Try to just get familiar with these URL concepts from a high level. Like any good developer, you can just look it up again the next time you need to know more!

# The Protocol

The "protocol", also referred to as the "scheme", is the first component of a URL. Its purpose is to define the rules by which the data being communicated is displayed, encoded or formatted.

Some examples of different URL protocols:

* http
* ftp
* mailto
* https

For example:

* `http://example.com`
* `mailto:noreply@fantasyquest.app`

## Not all schemes require a "//"

The "http" in a URL is always followed by `://`. All URLs have the colon, but the `//` part is only included for schemes that have an [authority component](https://www.rfc-editor.org/rfc/rfc3986#section-3.2). As you can see above, the `mailto` scheme doesn't use an authority component, so it doesn't need the slashes.

## Assignment

In the Fantasy Quest game menu, we show user's the email addresses of their friends. We need that email to be a clickable hyperlink. When they click the hyperlink their default email client should open with a new message ready to send to the address they clicked on.

Complete the `getMailtoLinkForEmail` function. It should return a "mailto" hyperlink for the given email.

# URL Ports

The port in a URL is a virtual point where network connections are made. Ports are managed by a computer's operating system and are numbered from `0` to `65,535`.

Whenever you connect to another computer over a network, you're connecting to a specific port on that computer, which is being listened to by a specific piece of software on that computer. A port can only be used by one program at a time, which is why there are so many possible ports.

The port component of a URL is often not visible when browsing normal sites on the internet, because 99% of the time you're using the default ports for the HTTP and HTTPS schemes: `80` and `443` respectively.

Whenever you aren't using a default port, you need to specify it in the URL. For example, port `8080` is often used by web developers when they're running their server in "test mode" so that they don't use the "production" port "80".

![URL port](https://i.imgur.com/h3kBsRC.png)

Ports are vitural little hubs managed by the operating system that allow to connect to different service on same domaine. 
I can run many different instances of different kinds of software and network withe them all at the same time. 

Traditional file server will typically route the path of a directory, which in this case would just be the root to a file called index.html in that directory, it's a convention. 

# URL Paths

In the early days of the internet, a URL's path often was a reflection of the file path on the server to the resource the client was requesting.

For example, if the website `https://exampleblog.com` had a web server running within its `/home` directory, then a request to the `https://exampleblog.com/site/index.html` URL might expect the `index.html` file from within the `/home/site` directory to be returned.

Websites used to be *very* simple. They were just a collection of text documents stored on a server. A simple piece of server software could handle incoming HTTP requests and respond with the documents according to the path component of the URLs.

## These days, it's not always about the filesystem

On many modern web servers, a URL's path isn't a reflection of the server's filesystem hierarchy. Paths in URLs are essentially just another type of parameter that can be passed to the server when making a request.

Conventionally, two different URL paths should denote different resources. For example, different pages on a website, or maybe different data types from a game server.

# Query parameters

Query parameters in a URL are *not* always present. In the context of websites, query parameters are often used for marketing analytics or for changing a variable on the web page. With website URLs, query parameters *rarely* change *which* page you're viewing, though they often will change the page's *contents*.

That said, query parameters can be used for anything the server chooses to use them for, just like the URL's path.
Query parameters changes somesthing very small about the request, maybe sme metadata, filtering option... 
Query parameters don't change somethin big like the ressource that's being requested or the web page instead, it changes somesting smaller like options or contents.. 

## How Google uses query parameters

1. Open a new tab and go to [https://google.com](https://google.com).
2. Search for "hello world"
3. Take a look at your current URL. It should start with `https://www.google.com/search?q=hello+world` here we have he search path and then query parameters with start "?" thant pairs of key values. 
4. Change the URL to say `https://www.google.com/search?q=hello+universe`
5. Press "enter"

You should see new search results for the query "hello universe". Google chose to use query parameters to represent the value of your search query. It makes sense - each search result page is *essentially* the same page as far as structure and formatting are concerned - it's just showing you different results based on the search query. 