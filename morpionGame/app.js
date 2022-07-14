const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGamesStatus');

const playerOne = 'X';
const playerTow = 'O';
let playerTurn = playerOne;

for (const cell of cells) {
    cell.addEventListener('click', playGame, {once:true});
}

const winningPattern = [
    [ 0,1,2],
    [ 3,4,5],
    [ 6,7,8],
    [ 6,3,6],
    [ 1,4,7],
    [ 2,5,8],
    [ 0,4,8],
    [ 2,4,6]
]
// on ajoute un 3ieme parametre à l'eventListener pour déclencher une seule fois une cellule 

function playGame(e){
    e.target.innerHTML = playerTurn;

    if(checkWin(playerTurn)){
        updateGameStatus('wins' + playerTurn);
        return endGame();
    }else if(checkDraw()){
        updateGameStatus('draw');
        return endGame();
    }

    updateGameStatus(playerTurn);
    playerTurn == playerOne ? playerTurn = playerTow : playerTurn = playerOne
}

function checkWin(playerTurn){
    return winningPattern.some(combination => {
        return combination.every(idx => {
            return cells[idx].innerHTML == playerTurn
        })
    })
}

function checkDraw(){
// on vérifie simplement si toutes les cases sont remplies. si toutes les cases sont remplies comme on a pas eu le déclenchement de la fonction checkWin c'est donc que l'on a une égalité
    return [...cells].every(cell =>{
        return cell.innerHTML == playerOne ||cell.innerHTML == playerTow
    });
}

function updateGameStatus(status){
    let statusText ; 

    switch(status){
        case 'X':
            statusText = "Au tour du joueur 2 (O)";
            break;
        case 'O':
            statusText = "Au tour du joueur 1 (X)";
            break;
        case 'winsX':
            statusText = "Le joueur 1(X) a gagné !";
            break;
        case 'winsO':
            statusText = "Le joueur 1(O) a gagné !";
            break;  
        case 'draw':
            statusText = "Egalité! ";
            break;   
    }

    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText
}

function endGame(){
    document.getElementById('gameEnd').style.display = 'block';
    document.getElementById('gameStatus').style.display = 'none';
}

function reloadGame(){
    window.location.reload();
}