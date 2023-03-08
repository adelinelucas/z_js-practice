// ## Assignment 

// Complete the `applyDamage` function that takes two parameters:

// * `damage`
// * `currentHP`

// It should return a `Promise` after 1 second because in Fantasy Quest dealing damage with an attack takes some time!

// If the damage inflicted would reduce the player's HP to `0` or less, the promise will `reject` with the string:

// > The player suffers ${damage} points of damage and has fallen unconscious.  

// Otherwise, the promise will `resolve` with the string:

// > The player suffers ${damage} points of damage and has ${newHP} hit points remaining.

// Where `newHP` is the player's HP after the damage is applied.


const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ?
      if(damage >= currentHP){
        resolve(` The player suffers ${damage} points of damage and has fallen unconscious.  
        `)
      }else {
        let newHP = currentHP - damage
        reject(`The player suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
      }
    }, 1000)
  })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
  applyDamage(damage, currentHP).then((message) => {
    console.log(`...applyDamage resolved with: ${message}`)
  }).catch((message) => {
    console.log(`...applyDamage rejected with: ${message}`)
  })
}

async function applySleep(time){
  await sleep(time)
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

runApplyDamageTest(27, 50)
applySleep(1100)
runApplyDamageTest(50, 50)
applySleep(1100)
runApplyDamageTest(110, 100)
applySleep(1100)


