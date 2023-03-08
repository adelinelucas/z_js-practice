const craftingCompleteWait = 30
const combiningMaterialsWait = 10
const smeltingIronBarsWait = 0
const shapingIronWait = 20

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function mySleep(){
  await sleep(2500)

}

mySleep()

