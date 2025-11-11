
const options = ["rock", "paper", "scissors"]
let computerSelection = getComputerChoice()
let humanSelection = getHumanChoice()
let computerScore = 0;
let humanScore = 0;
let tie = 0;

// Get computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * options.length)
    return randomOptions = options[choice];

}
getComputerChoice()

// Get human choice
function getHumanChoice() {
    let options = prompt("what is your choice?")
    
   // return userOption =
   return options.toLowerCase()

}

// Playgame
function playGame() {
computerScore;
humanScore;


function playRound() {

    if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!")
        computerScore += 1;
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors!")
        computerScore += 1;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("you win! Scissors beats Paper!")
        humanScore += 1;
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beat Paper!")
        computerScore += 1;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors!")
        humanScore += 1;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock!")
        humanScore += 1;
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("its a tie!")
        tie += 0;
    } else if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie!")
        tie += 0;
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
        console.log("its a tie!")
        tie += 0;
    } else {
        console.log('Wrong choice, pick again!')
    }
    
}

// playround 5 times
for (let i = 1; i < 5; i++) {

computerSelection = getComputerChoice();
humanSelection = getHumanChoice();

console.log(computerSelection, humanSelection)
console.log(computerScore, humanScore)
playRound() 
 }

// game winner
if(computerScore > humanScore ) {
console.log('computer wins')
} else if (humanScore > computerScore){
    console.log('Human wins')
} else if (humanScore == computerScore) { 
    console.log('Draw, no one wins')
 } else {
    alert ('Error')
 }
}
 

playGame()

