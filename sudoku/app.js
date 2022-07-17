let mistakesTxt = document.getElementById('mistakes');
let selectDigit; 
let mistakes = 0;

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

const fetchboard = async() => {
    const res = await fetch('https://sugoku.herokuapp.com/board?difficulty=easy');
    const data = await res.json();
    const board = data.board;

    const fetchSolution = await fetch('https://sugoku.herokuapp.com/solve',
    {
        method: 'POST',
        body: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })

    const solution = await fetchSolution.json();
    console.log(board);

    console.log('solution', solution);
    return [board, solution.solution];
}

const startgame = async() => {
    const boardGenAndSolution = await fetchboard();

    const board= boardGenAndSolution[0];
    const solution= boardGenAndSolution[1];

    console.log(board, solution);

    for(let i = 0; i<=9; i++){
        let digits = document.createElement('div');
        digits.id = i;
        digits.innerHTML = i;
        digits.addEventListener('click', setDigit);
        digits.classList.add('digit');
        document.getElementById('selection').appendChild(digits);
    }


    for(let row = 0; row < 9; row += 1){
        for(let column = 0 ; column < 9; column += 1 ){
            let cell = document.createElement('div');
            cell.id = row + '-' + column;
            if(board[row][column] !== 0) cell.innerHTML = board[row][column];
            if(row===2 || row===5) cell.classList.add('cell-bottom-border');
            if(column===2 || column===5) cell.classList.add('cell-right-border');
            cell.addEventListener('click', writeDigit);
            cell.classList.add('cell');
            document.getElementById('grid').appendChild(cell);
        }
    }   

    function setDigit(){
        if(selectDigit !== undefined) selectDigit.classList.remove('selected-digit');
        selectDigit = this;
        selectDigit.classList.add('selected-digit');
    }

    function writeDigit(){
        if(selectDigit !== undefined){
            const classValue = this.classList.value;

            if(selectDigit.id == 0 && classValue.includes('wrong-digit')){
                this.classList.remove('wrong-digit');
                this.innerHTML = '';
                return;
            }else {
                if(this.innerHTML != '') return;
                this.innerHTML = selectDigit.innerHTML;
    
                if(solution[this.id.charAt(0)][this.id.charAt(2)] == selectDigit.id){
                    this.classList.add('correct-digit');
                }else{
                    this.classList.add('wrong-digit');
                    mistakes += 1 ;
                    mistakesTxt.innerHTML = `Vous n\'avez pas correctement résolu le soduku, il y a ${mistakes} erreurs! `;
                }
            }   
        }
    }
}



startgame();