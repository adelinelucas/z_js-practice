// ## Assignment

// We need to save newly created characters on our *Fantasy Quest* server. We will use the `getUsers` function we created in the last exercise to make sure our creation logic is working.

// Let's create the `createUser()` function. It should:

// 1. Take `URL` and the `data` body as parameters.
// 2. Call `fetch`. `fetch()` should:
//    1. Use the `POST` Method
//    2. Use the `cors` mode
//    3. Set the `X-API-Key` header, with `apiKey` as its value
//    4. Set the `Content-Type` header with `application/json` as its value
//    5. Include the `body` field and pass the data as the key. Don't forget to stringify the data as `JSON`!
// 3. Return the response's JSON body

async function createUser(apiKey, url, data) {
  // ?
  const response = await fetch(url, {
    method:'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key' : apiKey
    },
    body: JSON.stringify(data)
  })

  return await response.json
}

// Test Suite Don't Touch Below This Line

const userToCreate = {
  characterName: 'Grendel',
  class: 'Warrior',
  level: 1,
  pvpEnabled: false,
  user: {
    name: 'Allan',
    location: 'USA',
    age: 27
  }
}

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

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

console.log('Retrieving user data...')
const userDataFirst = await getUsers(url, generatedKey)
logUsers(userDataFirst)
console.log('---')

console.log('Creating new character...')
const creationResponse = await createUser(generatedKey, url, userToCreate)
console.log(`Creation response body: ${JSON.stringify(creationResponse)}`)
console.log('---')


console.log('Retrieving user data...')
const userDataSecond = await getUsers(url, generatedKey)
logUsers(userDataSecond)
console.log('---')

