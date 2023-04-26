// destructuring faster/ easier way to access/unpack variables from arrays, objects
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john','peter','bob','anna','kelly']

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

const [john, anna] = friends;
// on récupère les values correspondants aux indexes que l'on destructure. 
// si l'on souhaite skiper une valeur, on peut mettre un virgule pour passer à l'index suivant. 
const [, peter, bob, , kellyname] = friends 
console.log(john, anna)
console.log(peter, bob, kellyname)


//**********
// swipe variables 
//*/

let first = 'bob';
let second = 'john';
let temp = second;
// ici on re-définie la valeur de second par référence à first soit bob
second = first; 
// ici on re-définie la valeur de first par référéence à second, qui est désormais bob
first = second;

console.log(first, second)

let first1 = 'bob';
let second1 = 'john';
// en utilisant 2 array on peut intervertir les valeurs
[second1, first1] = [first1, second1]

console.log(first1, second1)