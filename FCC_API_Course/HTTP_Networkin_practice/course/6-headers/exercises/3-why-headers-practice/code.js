// ## Assignment 

// Because we don't want any of our users to accidentally overwrite another user's saved data, our backend team has required that we use the `X-API-Key` header for all requests to *Fantasy-Quest's* server. By using different values, we're telling the server that we are a different person.

// Let's practice using headers by playing with the `X-API-Key` Header. I have written some code for you that:

// 1. Gets a location object from our game server.
// 2. Logs that object to the console.
// 3. Updates the object and sends those changes back to the server.
// 4. Gets the location object again and logs to the console to display the changes.

// Run the code in its *current state* to see the return values. You'll notice that the two objects that are logged to the console are the *same*. This is because the `X-API-Key` they are using is *different*, the update isn't being applied to the same account that we're checking in the last `getLocationResponse` call.

// Use the same apiKey value in the last call to `getLocationResponse` and rerun the code. Notice the location object is updated correctly!

const generatedApiKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'
const newLocationData = {
  'discovered': false,
  'id': '52fdfc07-2182-454f-963f-5f0f9a621d72',
  'name': 'Bloodstone Swamp',
  'recommendedLevel': 10
}

const oldLocation = await getLocationResponse(generatedApiKey, url)
console.log(`Got old location:`)
console.log(`- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`)
console.log('---')

await putLocation(generatedApiKey, url, newLocationData)
console.log('Location updated!')
console.log('---')

// const newGeneratedApiKey = generateKey()
const newLocation = await getLocationResponse(generatedApiKey, url)
console.log(`Got new location:`)
console.log(`- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`)
console.log('---')

// don't touch below this line

async function getLocationResponse(apiKey, url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

async function putLocation(apiKey, url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
