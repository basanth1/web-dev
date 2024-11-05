let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let yourScore = document.querySelector("#your-score");
let computerScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const generateComputerChoice = () => {
    let opt = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return opt[random];
};

const drawGame = () => {
    console.log("game was drawn");
    msg.innerText = "Draw game";
    msg.style.background = "grey";
};

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = generateComputerChoice();
    console.log("computer choice=", compChoice);

    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin);
    }
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        yourScore.innerText = userScore;
        console.log("User winner");
        msg.innerText = "You win";
        msg.style.background = "green";
    } else {
        compScore++;
        computerScore.innerText = compScore;
        console.log("computer winner");
        msg.innerText = "Computer wins";
        msg.style.background = "red";
    }
};

const action = (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
};

choices.forEach(action);
