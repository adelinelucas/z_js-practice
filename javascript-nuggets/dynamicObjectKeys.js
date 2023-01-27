const person = {
    name: 'john'
};

console.log(person.name) 
person.age = 25; 
console.log(person)

const items = {
    'featured-items': ['item1', 'item2']
}
console.log(items['featured-items'])
console.log(person['name'])

let appState = 'loading';
appState = 'error'
// the keyname appState => is loading in the object 
const keyname = 'computer';
const app = {
    [appState]: true
}
console.log(app);
// add new key name 
app[keyname] = 'apple';

app['keyname'] = 'kiwi';
console.log(app)

const state = {
    loading: true, 
    name:'',
    job:''
}
// function for update values of the object with square bracket notation 
const updateState = (key, value) =>{
    state[key] = value
}

updateState('name', 'Jojo Asitcot');
updateState('loading', 'false');
updateState('cooking', 'coco');
console.log(state)