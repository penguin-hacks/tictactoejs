let board = {'7': 'o' , '8': 'x' , '9': ' ' ,
            '4': ' ' , '5': 'x' , '6': ' ' ,
            '1': ' ' , '2': 'o' , '3': ' ' };
let availableBoard = [];
let acceptableAnswers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
function computerTurn() {
    if (board["1"] === 'x' || board["1"] === 'o') availableBoard.push("1");
    if (board["2"] === 'x' || board["2"] === 'o') availableBoard.push("2");
    if (board["3"] === 'x' || board["3"] === 'o') availableBoard.push("3");
    if (board["4"] === 'x' || board["4"] === 'o') availableBoard.push("4");
    if (board["5"] === 'x' || board["5"] === 'o') availableBoard.push("5");
    if (board["6"] === 'x' || board["6"] === 'o') availableBoard.push("6");
    if (board["7"] === 'x' || board["7"] === 'o') availableBoard.push("7");
    if (board["8"] === 'x' || board["8"] === 'o') availableBoard.push("8");
    if (board["9"] === 'x' || board["9"] === 'o') availableBoard.push("9");
    console.log(availableBoard)
};