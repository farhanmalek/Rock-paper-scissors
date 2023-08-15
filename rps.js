function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function game() {
    let userWin = 0;
    let compWin = 0;
    let tieCount = 0;
    let playerSelection;

    for (let i = 0; i < 5; i++) {

        do {
            playerSelection = prompt("Enter your choice: ");
        } while (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase()));

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`You chose ${playerSelection}, Computer chose ${computerSelection}. Result: ${result}`);

        if (result === "win") {
            userWin++;
        } else if (result === "lose") {
            compWin++;
        } else {
            tieCount++;
        }
    }

    if (userWin > compWin) {
        console.log("User Wins!");
    } else if (userWin < compWin) {
        console.log("Computer Wins! Try Again!");
    } else {
        console.log("TIE!");
    }
}

game();
