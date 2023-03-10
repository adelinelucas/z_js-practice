// ## Assignment

// It's common for developers to write local tests using mock (or fake) data that looks like real data. Let's ensure that the JSON format that the backend Fantasy Quest developers provided to us is valid JSON! It would be a shame to write a bunch of code just to find out the backend has given us the wrong format.

// Complete the `parseLocation` function. Use a [try/catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to safely call `JSON.parse` on the `locationString` provided. Keep in mind that `JSON.parse` throws an error if it is given a string that isn't valid JSON.

// If you can parse the string successfully, use the `printLocationObj` function to print the parsed object. If an error was thrown, just log `invalid json string` to the console.

function parseLocation(locationString) {
  // ?
  try{
		// let striginfyData = JSON.stringify(locationString);
		// console.log(striginfyData)
		let data = JSON.parse(locationString);
		printLocationObj(data);
  }catch(err){
	console.log(err)
  }
}

// don't touch below this line

function printLocationObj(parsed) {
  console.log(`id: ${parsed.id}`)
  console.log(`discovered: ${parsed.discovered}`)
  console.log(`name: ${parsed.name}`)
  console.log(`recommendedLevel: ${parsed.recommendedLevel}`)
}

parseLocation(`
{
	"discovered": false,
	"id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
	"name": "Bandit Camp",
	"recommendedLevel": 14
}
`)

console.log('---')

parseLocation(`
{
	"discovered": false,
	"id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
	"name": "Bandit Camp",
	"recommendedLevel": 14
}
`)
