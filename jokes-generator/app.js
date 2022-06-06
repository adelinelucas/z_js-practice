const jokeEl = document.getElementById('joke');
const btnNewJoke = document.getElementById('get_joke');

const APIURL = 'https://icanhazdadjoke.com/';

async function getJoke(){
    jokeEl.innerHTML = '';

    const resp = await fetch(APIURL, {
        headers : {
            'Accept': 'application/json'
        }
    });
    const respData = await resp.json();

    // console.log(respData.joke);
    jokeEl.innerHTML = respData.joke;
    
};

getJoke();


btnNewJoke.addEventListener('click', getJoke);