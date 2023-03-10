const {sortPages } = require("./report.js");
const {test, expect} = require('@jest/globals');

test('sortPages 2 pages', ()=>{
    const input = {
        'https://blog.boot.dev/path': 1,
        'https://blog.boot.dev': 3,

    };
    const actualOutput = sortPages(input)
    const excepted = [
        ['https://blog.boot.dev', 3],
        ['https://blog.boot.dev/path', 1],
    ];

    expect(actualOutput).toEqual(excepted)
})

test('sortPages 5 pages', ()=>{
    const input = {
        'https://blog.boot.dev/path': 1,
        'https://blog.boot.dev': 3,
        'https://blog.boot.dev/path2': 5,
        'https://blog.boot.dev/path3': 2,
        'https://blog.boot.dev/path4': 9,

    };
    const actualOutput = sortPages(input)
    const excepted = [
        ['https://blog.boot.dev/path4', 9],
        ['https://blog.boot.dev/path2', 5],
        ['https://blog.boot.dev', 3],
        ['https://blog.boot.dev/path3', 2],
        ['https://blog.boot.dev/path', 1],
    ];

    expect(actualOutput).toEqual(excepted)
})