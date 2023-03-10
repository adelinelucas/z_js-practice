const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const {test, expect} = require('@jest/globals');

// normalize function aim is 
// 'https://boot.dev' -> `boot.dev` 
// 'http://boot.dev' -> `boot.dev`
// 'https://Boot.dev' -> `boot.dev`
/*
test('normalizeURL strip protocol', ()=>{
    const input = 'https://blog.boot.dev/path';
    const actualOutput = normalizeURL(input)
    const excepted = 'blog.boot.dev/path';
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})


test('normalizeURL strip trailing slash', ()=>{
    const input = 'https://blog.boot.dev/path/';
    const actualOutput = normalizeURL(input)
    const excepted = 'blog.boot.dev/path';
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})

test('normalizeURL capitals', ()=>{
    const input = 'https://BLOG.boot.dev/path/';
    const actualOutput = normalizeURL(input)
    const excepted = 'blog.boot.dev/path';
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})

test('normalizeURL strip http', ()=>{
    const input = 'http://BLOG.boot.dev/path/';
    const actualOutput = normalizeURL(input)
    const excepted = 'blog.boot.dev/path';
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})
*/
test('getURLSFromHTML absolute URL', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path/">
            Boot.dev blog
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = 'https://blog.boot.dev/path/'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const excepted = ['https://blog.boot.dev/path/'];
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})

test('getURLSFromHTML relative URL', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
            Boot.dev blog
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = 'https://blog.boot.dev'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const excepted = ['https://blog.boot.dev/path/'];
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})

test('getURLSFromHTML boths URLs', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path1/">
            Boot.dev blog path 1
            </a>
            <a href="/path2/">
            Boot.dev blog path 2 
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = 'https://blog.boot.dev'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const excepted = ['https://blog.boot.dev/path1/', 'https://blog.boot.dev/path2/'];
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})

test('getURLSFromHTML, invalid URLs', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
            Invalid url
            </a>
        </body>
    </html>
    `;
    const inputBaseURL = 'https://blog.boot.dev'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const excepted = [];
    
    // we say i'm expected the actual output of normalize URL to equal theexcepted output that I've specified. 
    expect(actualOutput).toEqual(excepted)
})