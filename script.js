const choices = ['rock', 'paper', 'scissors']
const winners = []

function game(){
    for (let i=0; i <= 4; i++){
        console.log(i)
        playRound(i)
    }
    keepScore();
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection)
    console.log('Player picked: ' + playerSelection)
    console.log('Computer picked: ' + computerSelection)
    console.log(winner)
    winners.push(winner)
}


// computer randomly picks rock, paper or scissors
function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// players picks a choice
function playerPlay(){
    let playerSelection = prompt("Please type 'rock', 'paper', or 'scissors'.")
    playerSelection = playerSelection.toLowerCase()
    let check = validatePick(playerSelection)
    while (check === false){
        playerSelection = prompt("Error! Please type either 'rock', 'paper', 'scissors'.")
        playerSelection.toLowerCase()
        check = validatePick(playerSelection)
    }
    return playerSelection
}

function validatePick(choice){
    return choices.includes(choice);
}

function checkWinner(playerChoice, computerChoice){
    // if statement checks if the player won, or computer won or tie
    if ( playerChoice === computerChoice){
        return "Tie"
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        return "Player Won!"
    } else {
        return "Computer Won! Dang it."
    }
}

function keepScore() {
    // player wins
    let playerWins = winners.filter((item) => item == "Player Won!").length;
    // computer wins
    let computerWins = winners.filter((item) => item == "Computer Won! Dang it.").length;
    // ties
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("------------------------")
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + computerWins);
    console.log("Ties: " + ties);
    console.log("------------------------")
}

game();

