function tryFNC(param){
  try{
    printCharacterStats(param)
  }catch(error){
    console.log(error)
  }
}

// vs 

tryFNC(4);
tryFNC('ten');
tryFNC(10);

// vs 
try{
  printCharacterStats(4)
  printCharacterStats('ten') // stop running to that line beacause we have an error. 
  printCharacterStats(10)
}catch(error){
  console.log(error)
}
// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw 'Parameter is not a number!'
  }
  console.log(`Your character is level ${level}!`)
}
