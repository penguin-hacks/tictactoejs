const prompt = require('prompt');

prompt.start();


// let restart = false;
// while (restart) {


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

prompt.get(['number'], function (result) {
        //Exporting User input
    let acceptableAnswers = [7, 8, 9, 4, 5 , 6, 1, 2, 3];
    for (let i = 0; i < acceptableAnswers.length; ++i) {
        let inputNumber = result.number[i];
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
});



//Switch turns


let gameEnd = true;


//Save the progress
let restart = true;


//Restart
if (gameEnd !== true) {
    restart = false;
}


// }


