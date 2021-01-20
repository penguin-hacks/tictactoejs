let board = {'7': 'o' , '8': 'x' , '9': ' ' ,
            '4': ' ' , '5': 'x' , '6': ' ' ,
            '1': ' ' , '2': 'o' , '3': ' ' };

 function printBoard() {
    console.log(board['7'] + '|' + board['8'] + '|' + board['9'])
    console.log('-+-+-')
    console.log(board['4'] + '|' + board['5'] + '|' + board['6'])
    console.log('-+-+-')
    console.log(board['1'] + '|' + board['2'] + '|' + board['3'])
};           

let availableBoard = [];
let acceptableAnswers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
function computerTurn() {
    for(let i = 0; i < acceptableAnswers.length; ++i) {
       number = i.toString();
       if(board[number] === ' ') availableBoard.push(number); 
    }
    let computerTurnFinished = availableBoard[Math.floor(availableBoard.length * Math.random())];
    board[computerTurnFinished] = "o";
    printBoard();
 }
 computerTurn();