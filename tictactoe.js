
// let restart = false;
// while (restart) {
let winner = undefined;
let gameEnd = false;
let count = 0;
let turn = "x";
//Set out the board

let board = {'7': '' , '8': ' ' , '9': ' ' ,
            '4': ' ' , '5': ' ' , '6': ' ' ,
            '1': ' ' , '2': ' ' , '3': ' ' };

//Print the board

    console.log(board['7'] + '|' + board['8'] + '|' + board['9'])
    console.log('-+-+-')
    console.log(board['4'] + '|' + board['5'] + '|' + board['6'])
    console.log('-+-+-')
    console.log(board['1'] + '|' + board['2'] + '|' + board['3'])
    
    

    
// Pushing turns:  board["7"] = "j";
//Detect user input

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`It's your turn, ${turn}.  Choose where to go: 1 = bl, 2 = bm, 3 = br, 4 = ml, 5 = m, 6 = mr, 7 = tl, 8 = tm, 9 = tr`, function(n) {
    rl.close();
});

    let acceptableAnswers = [7, 8, 9, 4, 5 , 6, 1, 2, 3];
    for (let i = 0; i < acceptableAnswers.length; ++i) {
        let inputNumber = n[i];
        if (inputNumber !==  acceptableAnswers){
            return console.log("That isn't one of the acceptable answers! Please type a number 1 - 9.");
        } else {
            if (inputNumber === 1) board["1"] = turn;
            else if (inputNumber === 2) board["2"] = turn;
            else if (inputNumber === 3) board["3"] = turn;
            else if (inputNumber === 4) board["4"] = turn;
            else if (inputNumber === 5) board["5"] = turn;
            else if (inputNumber === 6) board["6"] = turn;
            else if (inputNumber === 7) board["7"] = turn;
            else if (inputNumber === 8) board["8"] = turn;
            else if (inputNumber === 9) board["9"] = turn;
    };
};




//Switch turns
if (turn = "x") turn = "o"

// Determining a winner

if (count >= 5) {
    //Did X win?
    if (board["1"] === "x" && board["2"] === "x" && board["3"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X."); 
    } else if (board["4"] === "x" && board["5"] === "x" && board["6"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["7"] === "x" && board["8"] === "x" && board["9"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["7"] === "x" && board["4"] === "x" && board["1"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["8"] === "x" && board["5"] === "x" && board["2"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["9"] === "x" && board["6"] === "x" && board["3"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["7"] === "x" && board["5"] === "x" && board["3"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    } else if (board["1"] === "x" && board["5"] === "x" && board["9"] === "x") {
        let gameEnd = true;
        return console.log("Game over; Winner is X.");
    }
    //Did O win?
    else if (board["1"] === "o" && board["2"] === "o" && board["3"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["4"] === "o" && board["5"] === "o" && board["6"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["7"] === "o" && board["8"] === "o" && board["9"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["7"] === "o" && board["4"] === "o" && board["1"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["8"] === "o" && board["5"] === "o" && board["2"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["9"] === "o" && board["6"] === "o" && board["3"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["7"] === "o" && board["5"] === "o" && board["3"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    } else if (board["1"] === "o" && board["5"] === "o" && board["9"] === "o") {
        let gameEnd = true;
        return console.log("Game over; Winner is O.");
    };
};


//Save the progress & restart
if (gameEnd !== true) {
    count++
};


// }


