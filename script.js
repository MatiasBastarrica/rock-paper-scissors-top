// ### AUXILIARY FUNCTIONS ###

function getOneTwoOrThree() {
  return Math.floor(Math.random() * (2 + 1) + 1);
}

const getHumanChoice = (e) => {
  let btnSelectedText = e.target.innerText;
  return btnSelectedText;
};

function getComputerChoice() {
  let oneTwoThree = getOneTwoOrThree();

  switch (oneTwoThree) {
    case 1:
      console.log("Computer: rock");
      return "rock";
      break;
    case 2:
      console.log("Computer: paper");
      return "paper";
      break;
    case 3:
      console.log("Computer: scissors");
      return "scissors";
      break;

    default:
      break;
  }
}

function showRunningScores() {
  scoreMessage.textContent = `Scores
   HUMAN: ${humanScore}
   COMPUTER: ${computerScore}
   `;
}

function tie(humanSelection, computerSelection) {
  resultMessage.textContent = `Tie! ${humanSelection} ties with ${computerSelection}`;
  showRunningScores();
}

function lose(humanSelection, computerSelection) {
  computerScore++;
  resultMessage.textContent = `You lost! ${computerSelection} beats ${humanSelection}`;
  showRunningScores();
}

function win(humanSelection, computerSelection) {
  humanScore++;
  resultMessage.textContent = `You won! ${humanSelection} beats ${computerSelection}`;
  showRunningScores();
}

function createStartOverBtn() {
  const btnStartOver = document.createElement("button");
  btnStartOver.textContent = "Start Over";
  results.appendChild(btnStartOver);

  btnStartOver.addEventListener("click", (e) => {
    btnsContainer.addEventListener("click", playRound);
    humanScore = 0;
    computerScore = 0;
    scoreMessage.textContent = "";
    resultMessage.textContent = "";
    winnerMessage.textContent = "";
    btnStartOver.remove();
  });
}
// ### SCORE VARIABLES ###

let humanScore = 0;
let computerScore = 0;

// ### DOM ###

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector("paper");
const btnScissors = document.querySelector("scissors");
const results = document.querySelector(".results");
const scoreMessage = document.querySelector("p.scores");
const resultMessage = document.querySelector("p.round-message");
const winnerMessage = document.querySelector("p.winner-message");
