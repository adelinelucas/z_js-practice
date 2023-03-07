## DNS

How to tell to internet that you want to communicate directly to one server ? That where web addresses comes in. 
IP : internet protocol adresses.

An IP is look like : 8.13.156.7 ==> IPv4 format
with 4 sections : each section can be 0-255. Every device connect to internet has its own unique IP adress. 
there is also a newer formet IP v6 : each section is seperated by a ':' and there is 8 sections. 12:458:565:23:1:59:45:89. 
IPv6 has alos more possibilities. 

In realty you don't memorise IP adress, it's not partical. So DNS DOMAIN NAME System commes in and his prupose is to map human readable IP adresses. 
When you search for "easyCash.com", the domain name system is responsible for looking up the IP address that's addsociated with "easyCash.com". 
there is also an intesrest if the API address change, the mapping can be updated without have to change the DOMAIN name. 

# Web Addresses

In the real world, we use addresses to help us find where a friend lives, where a business is located, or where a party is being thrown. In computing, web clients find other computers over the internet using [Internet Protocol or IP](https://en.wikipedia.org/wiki/Internet_Protocol) addresses.

An IP address is a numerical label that serves two main functions:

1. Location Addressing
2. Network Identification

## Domain names and IP Addresses

Each device connected to the internet has a unique IP address. When we browse the internet, the domains we navigate to are all associated with a particular IP address!

For example, this Wikipedia URL points to a page about miniature pigs: `https://en.wikipedia.org/wiki/Miniature_pig`

The [domain](https://en.wikipedia.org/wiki/Domain_Name_System) portion of the URL is `en.wikipedia.org`.

`en.wikipedia.org` converts to a specific IP address, and that IP address tells your computer exactly where to communicate with that Wikipedia page.

# Web Addresses Quiz

To recap, a "domain name" is part of a URL. It's the part that tells the computer *where the server is located on the internet* by being converted into a numerical IP address.

We'll cover exactly how an IP address is used by your computer to find a path to the server in a later networking course. For now, it's just important to understand that an IP address is what your computer is using at a lower level to communicate on a network.

Deploying a real website to the internet is actually quite simple. It involves only a couple of steps:

1. Create a server that hosts your website files and connect it to the internet
2. Acquire a domain name you bye a domain name to "registrars"
3. Connect the domain name to the IP address of your server
4. Your server is accessible via the internet!

![ip](https://i.imgur.com/vjjPt2a.png)

# DNS

As we discussed, the "domain name" or "hostname" is part of a URL. We'll get to the other parts of a URL later.

For example, the URL `https://example.com/path` has a hostname of `example.com`. The `https://` and `/path` portions aren't part of the `domain name -> IP address` mapping that we've been learning about.

## Using the URL API in JavaScript

The `URL` API is built into JavaScript. You can create a [new URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL):

```js
const urlObj = new URL('https://example.com/example-path')
```

And then you can [extract just the hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL):

```js
const urlObj.hostname
```

# What is the Domain Name System?

So we've talked about domain names and what their purpose is, but we haven't talked about the system that's used to do that conversion.

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System), or the "Domain Name System", is the phonebook of the internet. Humans connect to websites through [domain names](https://en.wikipedia.org/wiki/Domain_name), like [Boot.dev](boot.dev). DNS "resolves" these domain names to find the associated [IP addresses](https://en.wikipedia.org/wiki/Internet_Protocol) so that web clients can load the resources for the specific address.

![DNS Resolution](https://i.imgur.com/yvfSbVL.png)

## How does DNS Work?

We'll go into more detail on DNS in a future course, but to give you a simplified idea of how it works, let's introduce ICANN. [ICANN](https://www.icann.org/) is a not-for-profit organization that manages DNS for the entire internet.

Whenever your computer attempts to resolve a domain name, it contacts one of ICANN's ["root nameservers"](https://en.wikipedia.org/wiki/Root_name_server) whose address is included in your computer's networking configuration. From there, that nameserver can gather the domain records for a specific domain name from their distributed DNS database.

If you think of DNS as a phonebook, ICANN is the publisher that keeps the phonebook in print and available. 

# Subdomains

We learned about how a domain name resolves to an IP address, which is just a computer on a network - often the internet.

A *subdomain* prefixes a domain name, allowing a domain to route network traffic to many different servers and resources. 

For example, the [Boot.dev](https://boot.dev) website that you're on right now is hosted on a different computer than our blog. Our blog, found at [blog.boot.dev](blog.boot.dev) is hosted on our "blog" subdomain.

if we decompose we have : 
boot.dev : .dev is the top level domain (.fr /.com.... )
            boot is the domain name. 
            api.boot.dev here we have the subdomain api tha prefixes a domain name. 
We paid for a domain name but also we own all the subdomains name possibile to host other element. 

