// let body = { a: 9007199254740992, b: "hahahaha" }; //int max + 1
const fetch = require('node-fetch');

fetch('http://localhost:3000/search', {
    method: 'post',
    body: "a",
    headers: { 'Content-Type': 'text/plain' },
}).then(res => res.text())
.then(text => console.log(text));

// body = {9007199254740992: 'hello'}

// fetch('http://localhost:3000/update', {
//     method: 'post',
//     body: JSON.stringify(body),
//     headers: { 'Content-Type': 'application/json' },
// })

// body = {a: -9007199254740992}

// fetch('http://localhost:3000/update', {
//     method: 'post',
//     body: JSON.stringify(body),
//     headers: { 'Content-Type': 'application/json' },
// })

// body = {}

// fetch('http://localhost:3000/update', {
//     method: 'post',
//     body: JSON.stringify(body),
//     headers: { 'Content-Type': 'application/json' },
// })

// body = 


//int max + 1 as val
// int max + 1 as key
//int min - 1 as val
//int min - 1 as key
//empty object
//key field empty
//val field empty
//multiple changes to same key in one request
//sending raw empty plain text
//one more

//int max + 1 as key
//int min - 1 as key
//empty text
//sending it valid JSON
//sending it invalid JSON

