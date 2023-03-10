// ## Assignment

// Similar to before, the `applyDamage` function takes a damage value and the player's current HP as inputs and returns a Promise. On line 1, call `applyDamage` with inputs:

// * `damage` = `25`
// * `currentHP` = `50`

// Then `await` the returned promise and save the resolved value in a variable called `message` so it can be logged to the console.


async function damageFC(){
  let damage = 25;
  let currentHP=50
  const message =  await applyDamage(damage,currentHP );
  console.log(message)
}
damageFC()
// Don't touch below this line

function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage
    setTimeout(() => {
      resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
    }, 1000)
  })
}

