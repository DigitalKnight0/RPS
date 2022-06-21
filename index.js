let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.buttons > *')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.classList.value
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)
        printResults(result)
        if(checkWinner()){
            endGame()
            changeButtons(true)
        }
    })
})

function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    if( (playerSelection === "rock" && computerSelection === "scissors") 
      || (playerSelection === "paper" && computerSelection === "rock")
      || (playerSelection === "scissors" && computerSelection === "paper") ){
        playerScore++
        return 'You win!'
      }
    else if(playerSelection === computerSelection){
        return "IT's a Draw!"
    }
    else{
        computerScore++
        return "You lose! Computer wins!"
    }
}



function printResults(result){
    let infoBox = document.querySelectorAll('.round-info > *')
    infoBox[0].textContent = result
    infoBox[1].textContent = `Player Score: ${playerScore}`
    infoBox[2].textContent = `Computer Score: ${computerScore}`
}

function checkWinner(){
   return playerScore > 4 || computerScore > 4
}

function endGame(){
    const resultBox = document.querySelector('.result')
    if(playerScore > computerScore){
        resultBox.textContent = 'Yay you won! The computer has been defeated!'
    }
    else{
        resultBox.textContent = 'You lost! Better luck next time :('
    }
}

function changeButtons(status){
    document.querySelectorAll('.buttons > *')
    buttons.forEach(button => {
        button.disabled = status
    })
}

function resetGame(){
    playerScore = 0
    computerScore = 0
    printResults('Game Begins!')
    document.querySelector('.result').textContent = "You can win!, We believe in you!"
    changeButtons(false)
}

document.querySelector('.reset').addEventListener('click', resetGame)
