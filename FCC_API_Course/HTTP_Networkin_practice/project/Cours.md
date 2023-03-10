## Test
When you want to test you have 3 process : 
    1. stub out the function that you want to test. 
    2. write test for the function
    3. go back and implement kind of the meat of the function
Jest automatically look for files in he folder that have the .test.js. 

In you test file you have to import the function you want to test. 
the way testing works with jes, it there's kind of this top level test function and it takes as 
    - its first input the name of the test. 
    - second input is a function. In this function we can use this expect function to do a test. 

When we run jest, it will compare expect output to to equal at what we've pre-defined. 


Relative url : is a URL that does not include the protocol and the domain, it's just include the path. 
In this case, the browser will assume that these reletive link are attached to the same domain. 


NB: a recursive function is a function that calls itself. 