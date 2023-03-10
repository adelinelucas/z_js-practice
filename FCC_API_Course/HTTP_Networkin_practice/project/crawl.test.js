const { normalizeURL } = require("./crawl.js");
const {test, expect} = require('@jest/globals');

// normalize function aim is 
// 'https://boot.dev' -> `boot.dev` 
// 'http://boot.dev' -> `boot.dev`
// 'https://Boot.dev' -> `boot.dev`


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