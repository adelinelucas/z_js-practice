let attempts = 0; let bulls = 0; let cows = 0;
let secretNumber = generateSecretNumber();
console.log(secretNumber);
let roundStats = {
    round: 1,
    wins:0,
    loses:0,
}

function printGameStats(){
    const gameStats = document.getElementById('gameStats'); 
    gameStats.innerHTML = `R:${roundStats.round} | V:${roundStats.wins} | D:${roundStats.loses}`;
}

function playAgain(){
    roundStats.round += 1;
    printGameStats();
    attempts = 0; bulls = 0; cows = 0;
    secretNumber = generateSecretNumber();
}

function checkGuess(){
    let guessInput = document.getElementById('guessInput')
    let guess = document.getElementById('guessInput').value;
    let secretString = secretNumber.join('');

    bulls = 0 ; 
    cows = 0;

    const checkGuessLength = new Set(guess);
    // set permet de vérifier les doublons

    if(guess.length !== checkGuessLength.size || guess.length !== 4){
        document.getElementById('logsArea').value += `${guess} est invalide, merci d'entrer un nombre composé de exactement 4 chiffres différents. \n `; 
        return null;
    }

    attempts += 1; 
    for(let i=0; i<4 ; i++){
        if(secretString[i] === guess[i]){
            bulls += 1;  
        }else if (secretString.includes(guess[i])){
            cows += 1;
        }
    }

    if(bulls === 4 ){
        document.getElementById('logsArea').value += `Bravo ! Vous avez trouvé le chiffre mystère " ${secretString}" ,  en ${attempts} essais. \n `; 
        roundStats.wins += 1;
        return playAgain();
    }else if( attempts === 10){
        document.getElementById('logsArea').value += `${secretString} |Dommage vous avez perdu !! \n `; 
        roundStats.loses -= 1;
        return playAgain();
    }

    document.getElementById('logsArea').value += `${guess} - ${bulls}B| ${cows}C | Essais : ${attempts} ! \n `; 
}

function printRules(){
    alert("Entre un nombre composé de 4 chiffres dans la case correspondantes. L'\ordinateur compare avec le code à deviner et donne 2 indices : les numéros 'bulls' (b) et les coxs (c). Un bulls est un chiffre qui est présent dans les 2 codes à la meme position. Un cows est un chiffre qui est présent dans les 2 codes mais à une position différente.");
}

function clearLogs(){
    let logs = document.getElementById('logsArea');
    logs.value = '';
}

function generateSecretNumber(){
    // générer un array de l à 9 avec la destructuration 
    let numbers = Array.from({length : 9}, (v,k)=> k+1);

    let currentIndex = numbers.length, randomIndex;

    while(currentIndex !=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
    }
    return numbers.slice(0,4);
}