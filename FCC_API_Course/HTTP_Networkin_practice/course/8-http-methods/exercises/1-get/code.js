// ## Assignment 

// We need to write a reusable function that retrieves all of the *Fantasy Quest* users from our server.

// Complete the `getUsers()` function. It should:

// 1. Call `fetch` using the `URL` parameter. The fetch call should:
//   1. Use the `'GET'` Method
//   2. Use the `'cors'` mode
//   3. Add an `X-API-Key` header with `apiKey` as the value
// 2. Return the resulting JSON data from the response

// We've done this all before, but now you're writing it all from scratch!

async function getUsers(url, apiKey) {
  const data = await fetch(url, {
    method:'GET',
    mode:'cors',
    headers:{ 
    'X-API-Key': apiKey}
  })

  const JSONdata = await data.json();
  return JSONdata;
}

// Don't touch below this line

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
const users = await getUsers(url, generatedKey)
logUsers(users)

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logUsers(users) {
  for (const user of users) {
    console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}
