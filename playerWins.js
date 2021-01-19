let turn = "x";


if (count >= 5) {
    function playerWins(player_character) { // player_character is either 'x' or 'o'
    const winning_combinations = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['7', '4', '1'], ['8', '5', '2'], ['9', '6', '3'], ['7', '5', '3'], ['1', '5', '9']];
 
    for(let i = 0; i < winning_combinations.length; ++i) {
       const first_number = winning_combinations[i][0];
       const second_number = winning_combinations[i][1];
       const third_number = winning_combinations[i][2];
 
       if(board[first_number] === player_character && board[second_number] === player_character && board[third_number] === player_character) {
          return(true); // This should immediately stop the function and declare the game won by player_character
       }
    }
    // Since the return(true) didn't happen, that means the player_character didn't win so return false.
    return(false);
 }
};
playerWins(turn);
