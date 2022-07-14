let loose = 0;
let win = 0;
let choices= ['paper', 'rock', 'scissors'];
let gameScore = document.getElementById('gameScore');
const gameStatus = document.getElementById('gameStatus');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');

const rungame = (userchoice)=>{
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`M: ${userchoice} | c: ${computerchoice} `);

    switch( userchoice + '-' + computerchoice){
        case 'paper-scissors':
        case 'rock-paper':
        case 'scissors-rock':
            loose += 1;
            gameStatus.innerHTML = `Moi: ${userchoice} | Ordinateur: ${computerchoice} -> Computer gagne !`;
            break;
        case 'paper-rock':
        case 'rock-scissors':
        case 'scissors-paper':
            win += 1;
            gameStatus.innerHTML = `Moi: ${userchoice} | Ordinateur: ${computerchoice} -> Je gagne!`;
            break;
        case 'paper-paper':
        case 'rock-rock':
        case 'scissors-scissors':
            gameStatus.innerHTML = `Moi: ${userchoice} | Ordinateur: ${computerchoice} -> Egalité pour cette manche!`;
            break;
    }

    gameScore.innerHTML =  `Moi: ${win} | Ordinateur: ${loose}`;
}

paper.addEventListener('click', ()=>{
    rungame('paper')
});

rock.addEventListener('click', ()=>{
    rungame('rock')
});

scissors.addEventListener('click', ()=>{
    rungame('scissors')
});