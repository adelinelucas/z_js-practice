// formData API interface that we can use to construct a set of key value pairs representing form fields and their values. 
// form data allows us to select all inputs of a form instead of selected each input 
// in order to have formData working you have to provide a name on each input 

// previsous way : select each input
/*
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    // check for empty values
    if (!nameValue || !emailValue || !passwordValue) {
      console.log('please provide values');
      return;
    }
    // do something
    console.log(nameValue, emailValue, passwordValue);
  
    // after that clear values
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  });
*/


// formData
const myform = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);
myform.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // won't directly return values
    console.log(formData);

    // spread out - entries, values, keys
    const entries = [...formData.entries()];
    console.log(entries);
    const values = [...formData.values()];
    console.log(values);
    const keys = [...formData.keys()];
    console.log(keys);

    // iterate over with "for of" loop
    for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
    }
    // check for value
    const name = formData.get('name');
    console.log(name);
    // append
    formData.append('test', 'test');
    // delete
    formData.delete('test');
    formData.delete('email');
    // check property
    const checkName = formData.has('name');
    console.log(checkName);

     // it's not JSON so....(depends on the server)
    axios.post('someUrl', formData);

    const formObject = Object.fromEntries(formData);
    console.log(formObject);
    // will work
    axios.post('someUrl', formObject);

    // reset
    e.currentTarget.reset();
});