// Spread Operator ... 
// alloxs and iterable to spread/expand individually inside reciever
// split into singl items and COPY them

// with string
const udemy = 'udemy';
const letters = [...udemy]; 
console.log(letters);

// arrays
const boys = ['jhon', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';
// create new array join boys, girls, bestfriend
const nestedArray = [boys, girls, bestFriend]; // pb here we have nested structure
console.log(nestedArray)
const friends = [...boys, ...girls, bestFriend];
console.log(friends)

// reference
const newFriends = friends; // here we affecte newFriends values by reference of the friends array,
newFriends[0] ='nancy'; // so when we modify value of newFirends it's also modify friends array

console.log(newFriends, friends)

// copy 
const newFriendsCopiedArray = [...friends]; // here newFriendsNewArray is done on base of a copy of friends
newFriendsCopiedArray[0] ='Sally';
console.log(newFriendsCopiedArray, friends)


//ES2018 - ES8 Objects
const person = {name:'john',lastname:'peter',job:'developper'}
const newPersonn = {...person, city:'paris', lastname:'Joseph'} // we add new property with a coma but we can also overwrite a value by re-writing the value
console.log(newPersonn)
newPersonn.name = 'toto'
console.log(newPersonn,person)