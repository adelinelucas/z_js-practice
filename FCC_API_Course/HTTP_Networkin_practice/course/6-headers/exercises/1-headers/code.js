// ## Assignment

// Complete the `logContentType()` function. It takes a response object as input and should log out the `content-type` header to the console

// Take a look at the lower section of the code to see exactly how it's being created.

// Use the [`.get()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get) method on the response object's `headers` property to get access to the header you need.

function logContentType(resp) {
  const headerVal = resp.headers.get('content-type')
  // get is a built in function. 
}

// don't touch below this line

const apiKey = generateKey()
const bootdevAPIDomain = 'api.boot.dev'

const items = await getItemData(bootdevAPIDomain)

logContentType(items)

async function getItemData(domain) {
  const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
