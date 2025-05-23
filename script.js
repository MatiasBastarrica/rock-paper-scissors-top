// ### PSEUDOCOE ###
// ## LOGIC TO GET THE COMPUTER CHOICE ##

function getComputerChoice() {
  function getOneTwoOrThree() {
    return Math.floor(Math.random() * (2 + 1) + 1);
  }

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

// getComputerChoice();

// ## LOGIC TO GET THE HUMAN CHOICE ##

function getHumanChoice() {
  function getHumanInput() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
  }

  let humanInput = getHumanInput();

  switch (humanInput) {
    case "rock":
      console.log("Human: rock");
      return "rock";
      break;
    case "paper":
      console.log("Human: paper");
      return "paper";
      break;
    case "scissors":
      console.log("Human: scissors");
      return "scissors";
      break;
    default:
      break;
  }
}

// getHumanChoice();

// ## DECALRE THE PLAYERS SCORE VARIABLES ##

let humanScore = 0;
let computerScore = 0;
