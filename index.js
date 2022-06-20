function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getUserInput(){
    let userChoice
    let noOfEntries = 0
    while(!(["rock", "paper", "scissors"].includes(userChoice))){
        noOfEntries == 0 ? noOfEntries++ : alert("Invalid entry")
        userChoice = prompt("Please enter Rock, Paper or Scissors").toLowerCase()
    }
    return userChoice
}

function playRound(playerSelection, computerSelection){
    if( (playerSelection === "rock" && computerSelection === "scissors") 
      || (playerSelection === "paper" && computerSelection === "rock")
      || (playerSelection === "scissors" && computerSelection === "paper") ){
        return 1
      }
    else if(playerSelection === computerSelection){
        return 0
    }
    else{
        return -1
    }
}

function playGame(){
    let scoreCard = [0, 0];
    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay()
        let playerSelection = getUserInput()
        let result = playRound(playerSelection, computerSelection)
        if(result === 1){
            console.log(`You won! ${playerSelection} beats ${computerSelection}`)
            scoreCard[0]++
        }
        else if(result === -1){
            console.log(`Computer won! ${computerSelection} beats ${playerSelection}`)
            scoreCard[1]++
        }
        else{
            console.log("It's a Draw!")
        }

    }
    return scoreCard
}

function printFinalResult(scoreCard){
    let playerScore = scoreCard[0]
    let computerScore = scoreCard[1]
    if(playerScore > computerScore){
        console.log("The Player has won the Series!")
    }
    else if(computerScore > playerScore){
        console.log("The Computer has won the Series!")
    }
    else{
        console.log("This series has ended up in a draw")
    }
    console.log("Final Scores are as follows")
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)
}

function startGame(){
    let scoreCard = playGame()
    console.log("\nThank you for Playing")
    printFinalResult(scoreCard)
}

startGame()