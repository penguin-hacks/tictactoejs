
// let restart = false;
// while (restart) {
let winner = undefined;
let gameEnd = false;
let count = 0;
let turn = "x";
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


let answer = '';
function doTurn() {
    rl.question(`It's your turn, ${turn}.  Choose where to go: 1 = bl, 2 = bm, 3 = br, 4 = ml, 5 = m, 6 = mr, 7 = tl, 8 = tm, 9 = tr`, (answer) => {
        rl.close();

        // isAcceptableInput
        isAcceptableInput(turn);
        // checkIfWinner -- sets gameEnd = true and does return()
        playerWins();
        // doComputerTurn

    });
};


function isAcceptableInput(userTurn) {
    let acceptableAnswers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    for (let i = 0; i < acceptableAnswers.length; ++i) {
        let inputNumber = acceptableAnswers[i];
        if (inputNumber !==  answer){
            console.log("That was not an acceptable answer!");
        } else {
            if (inputNumber === 1) board["1"] = userTurn;
            else if (inputNumber === 2) board["2"] = userTurn;
            else if (inputNumber === 3) board["3"] = userTurn;
            else if (inputNumber === 4) board["4"] = userTurn;
            else if (inputNumber === 5) board["5"] = userTurn;
            else if (inputNumber === 6) board["6"] = userTurn;
            else if (inputNumber === 7) board["7"] = userTurn;
            else if (inputNumber === 8) board["8"] = userTurn;
            else if (inputNumber === 9) board["9"] = userTurn;
        };
    };
};
    // Determining a winner
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



if (count >= 5) {
    
};
//Switch turns
if (turn === "x") turn = "o";

//Save the progress & restart
if (gameEnd !== true) {
    count++
};


// }


