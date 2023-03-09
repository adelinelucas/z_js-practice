# HTTPS

The mots importtant security feature of HTTPS is encryption. it keeps the information that we are sending in our request and the information coming back in the response secure and encrypted. So that only us as the sender and the server as the receiver are able to decrypt and process that information. 

When we send our htpp request, it doesn't go directly from our computer to the server, there are intermediraires, for exmpl internet service provider. 
With plain HTTP the data transmitted is never safe, anyone in the middle can look at everything you're sending. 

Hypertext Transfer Protocol *Secure* or [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/https) is an extension of the HTTP protocol. HTTPS secures the data transfer between client and server by [encrypting](https://developer.mozilla.org/en-US/docs/Glossary/Encryption) all of the communication.

HTTPS allows a client to safely share sensitive information with the server through an HTTP request, such as credit card information, passwords, or bank account numbers.

# Security and Encryption

HTTPS Encryption 
we need to encrypt the data on client and we want the server to be able to decrypt the encrypted packet of information. 

On server side, we have 2 key 
    public key : for encryting info
    private key : decrypt info
    then we have a 3 key to communicate between private and public key

1. server generate public/ private key 
2. Client interface contacts the server // at this point the server canno't send ecnrypted messages back to the client;
3. Server send the public key to the client
3. client and server negociate a symantric key // si the client generate a secret token, send it to the server and both parties useing that secret token are able to generate the same symmetric key. 
4. client send encrypted HTTP request
5. Server decrypt the request 
6. Server send a encrypted response
7. client is able to decrypte response. 

HTTPS requires that the client use [SSL](https://developer.mozilla.org/en-US/docs/Glossary/SSL) or [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) to protect requests and traffic by encrypting the information in the request. HTTPS is just HTTP with extra security!

SSL and TLS they're kind of the security pieces of HTTPS. HTPPS as SSL and TLS tacked on to HTPP in order to add security features. 

![HTTPS](https://i.imgur.com/iOkQUdG.png)

## HTTPS keeps your messages private, but not your identity

We won't cover *how* encryption works in this course, but we will in later courses! For now, it's important to note that while HTTPS encrypts *what you are saying*, it doesn't necessarily protect *who you are*. Tools like [VPNs](https://nordvpn.com/what-is-a-vpn/) are needed for remaining anonymous online.

## HTTPS ensures that you're talking to the right person (or server)

In addition to encrypting the information within a request, HTTPS uses [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) to prove that you're communicating with the server that you think you are. If a hacker were to intercept an HTTPS request by tapping into a network cable, they wouldn't be able to successfully pretend they are your bank's web server.