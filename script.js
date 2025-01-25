const result = document.getElementById("result")
const humanScore = document.getElementById("human-score")
const machineScore = document.getElementById("machine-score")
const humanSelection = document.getElementById("human-choice")
const machineSelection = document.getElementById("machine-choice")

let playerPts = 0
let cpuPts = 0

const playerSelection = (humanChoice) => {
    playTheGame(humanChoice, machineChoice())
    switch (humanChoice) {
        case "rock": humanSelection.innerText = "🪨"
            break;

        case "paper": humanSelection.innerText = "📄"
            break;

        default: humanSelection.innerText = "✂️"
            break;
    }
}

const machineChoice = () => {
    const options = ["rock", "paper", "scissors"]

    const randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0: machineSelection.innerText = "🪨"
            break;
        case 1: machineSelection.innerText = "📄"
            break;
        default: machineSelection.innerText = "✂️"
            break;
    }

    return options[randomNumber]
}

const playTheGame = (playerChoice, cpuChoice) => {
    console.log("teste1 " + playerChoice, "teste2 " + cpuChoice)

    if (playerChoice === cpuChoice) {
        console.log("empate")
        result.innerText = "Empate"
    }
    else if (
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "scissors" && cpuChoice === "paper") ||
        (playerChoice === "paper" && cpuChoice === "rock")) {
        console.log("ganhou")

        playerPts++
        humanScore.innerText = playerPts
        result.innerText = "Você ganhou!"
    }
    else {
        console.log("perdeu")
        cpuPts++
        machineScore.innerText = cpuPts
        result.innerText = "Você perdeu!"
    }
}

const restartGame = () => {
    playerPts = 0
    cpuPts = 0
    result.innerText = "---"
    humanScore.innerText = playerPts
    machineScore.innerText = cpuPts
    humanSelection.innerText = "---"
    machineSelection.innerText = "---"
}