let hello = function (){
    console.log('Bonjour, on test les modules! ')
}

let maVar = "ma variable" // si on exporte par cette variable n'intéferera pas avec les autres modules, son scope reste limité à ce fichier. 

let auRevoir = function (){
    console.log('au revoir')
}

// indiquer ce qu'on exporte de notre fichier et ce qui pourra etre importé par d'autre fichier 
module.exports =  {hello, auRevoir}
// module.exports =  auRevoir

// on peut également exporter un object 
// module.exports = {
//     hello : hello
// }