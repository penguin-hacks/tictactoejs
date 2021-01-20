
// let restart = false;
// while (restart) {
let winner = undefined;
let gameEnd = false;
let count = 0;
//Set out the board


let board = {'7': ' ' , '8': ' ' , '9': ' ' ,
            '4': ' ' , '5': ' ' , '6': ' ' ,
            '1': ' ' , '2': ' ' , '3': ' ' };

//Print the board
function printBoard() {
    console.log(board['7'] + '|' + board['8'] + '|' + board['9'])
    console.log('-+-+-')
    console.log(board['4'] + '|' + board['5'] + '|' + board['6'])
    console.log('-+-+-')
    console.log(board['1'] + '|' + board['2'] + '|' + board['3'])
};
    printBoard();


    
// Pushing turns:  board["7"] = "j";
//Detect user input

const readline = require("readline");
const { isatty } = require("tty");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// while(gameEnd === false) {
//     doTurn();
// };
doTurn();
let acceptableAnswers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
function doTurn() {
    console.log(`It's your turn. Choose where to go: 1 = bl, 2 = bm, 3 = br, 4 = ml, 5 = m, 6 = mr, 7 = tl, 8 = tm, 9 = tr`);
    rl.question(``, (aanswer) => {
        
        function isAcceptableInput() {
            for (let i = 0; i < acceptableAnswers.length; ++i) {
                let inputNumber = acceptableAnswers[i];
                if (inputNumber !== aanswer){
                    if (inputNumber === 1) return board["1"] = "x";
                    else if (inputNumber === 2) return board["2"] = "x";
                    else if (inputNumber === 3) return board["3"] = "x";
                    else if (inputNumber === 4) return board["4"] = "x";
                    else if (inputNumber === 5) return board["5"] = "x";
                    else if (inputNumber === 6) return board["6"] = "x";
                    else if (inputNumber === 7) return board["7"] = "x";
                    else if (inputNumber === 8) return board["8"] = "x";
                    else if (inputNumber === 9) return board["9"] = "x";
                } else {
                     console.log("That was not an acceptable answer!")
                };
            };
        };
        
        // isAcceptableInput
        isAcceptableInput();
        console.log(board);
        // checkIfWinner -- sets gameEnd = true and does return()
        playerWins();
        // doComputerTurn
        computerTurn();
        rl.close();
    });
};


    // Determining a winner
    let turn = "x";
function playerWins() { // player_character is either 'x' or 'o'
    if(count < 5) return(false);

    const winning_combinations = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['7', '4', '1'], ['8', '5', '2'], ['9', '6', '3'], ['7', '5', '3'], ['1', '5', '9']];
 
    for(let i = 0; i < winning_combinations.length; ++i) {
       const first_number = winning_combinations[i][0];
       const second_number = winning_combinations[i][1];
       const third_number = winning_combinations[i][2];
 
       if(board[first_number] === turn && board[second_number] === turn && board[third_number] === turn) {
          return(true); // This should immediately stop the function and declare the game won by player_character
       }
    }
    // Since the return(true) didn't happen, that means the player_character didn't win so return false.
    return(false);
 }

 let availableBoard = [];
 function computerTurn() {
     for(let i = 0; i < acceptableAnswers.length; ++i) {
        number = i.toString();
        if(board[number] === ' ') availableBoard.push(number); 
     }
     let computerTurnFinished = availableBoard[Math.floor(availableBoard.length * Math.random())];
     board[computerTurnFinished] = "o";
  }
  computerTurn();

if (count >= 5) {
    
};

//Save the progress & restart
if (gameEnd !== true) {
    count++
};


// }


