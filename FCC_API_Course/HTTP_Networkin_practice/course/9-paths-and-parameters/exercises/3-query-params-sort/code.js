// ## Assignment

// The backend team building *Fantasy Quest's* server has added support for query parameters! The server offers a `sort` parameter that can be optionally added by appending `?sort=fieldName` to the end of the URL, where `fieldName` is the property of the resource you want the response records sorted by.

// We are creating a leaderboard and want to sort our user records by their *level*.

// Update the `getUsers` function's `fullURL` with a *query parameter* that will sort the user records by level.

async function getUsers(url, apiKey, fieldname) {
  const fullURL = `${url}?sort=${fieldname}`
  const response = await fetch(fullURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

// don't touch below this line

const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

const apiKey = generateKey()

const users = await getUsers(baseURL, apiKey, 'level')
for (const user of users) {
  console.log(`got user with name: ${user.characterName}, and level: ${user.level}`)
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
