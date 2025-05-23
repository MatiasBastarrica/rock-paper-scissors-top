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

// ## WRITE THE LOGIC TO PLAY A SINGLE ROUND ##

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// function playRound(humanChoice, computerChoice) {
//   let humanChoiceCapitalized =
//     humanChoice[0].toUpperCase() + humanChoice.slice(1);
//   let computerChoiceCapitalized =
//     computerChoice[0].toUpperCase() + computerChoice.slice(1);

//   if (humanChoice === "rock" && computerChoice === "rock") {
//     return console.log(
//       `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
//     );
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     computerScore++;
//     return console.log(
//       `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
//     );
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     humanScore++;
//     return console.log(
//       `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
//     );
//   }

//   if (humanChoice === "paper" && computerChoice === "paper") {
//     return console.log(
//       `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
//     );
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     humanScore++;
//     return console.log(
//       `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
//     );
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     computerScore++;
//     return console.log(
//       `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
//     );
//   }

//   if (humanChoice === "scissors" && computerChoice === "scissors") {
//     return console.log(
//       `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
//     );
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     computerScore++;
//     return console.log(
//       `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
//     );
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     humanScore++;
//     return console.log(
//       `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
//     );
//   }
// }

// playRound(humanSelection, computerSelection);
// playRound(humanSelection, computerSelection);
// playRound(getHumanChoice(), getComputerChoice());

// ## LOGIC TO PLAY THE ENTIRE GAME ##

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let humanChoiceCapitalized =
      humanChoice[0].toUpperCase() + humanChoice.slice(1);
    let computerChoiceCapitalized =
      computerChoice[0].toUpperCase() + computerChoice.slice(1);

    if (humanChoice === "rock" && computerChoice === "rock") {
      return console.log(
        `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
      );
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      return console.log(
        `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
      );
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return console.log(
        `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
      );
    }

    if (humanChoice === "paper" && computerChoice === "paper") {
      return console.log(
        `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return console.log(
        `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
      );
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      return console.log(
        `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
      );
    }

    if (humanChoice === "scissors" && computerChoice === "scissors") {
      return console.log(
        `Tie! ${humanChoiceCapitalized} ties with ${computerChoiceCapitalized} `
      );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      return console.log(
        `You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return console.log(
        `You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`
      );
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    return console.log(`The WINNER is the HUMAN!.`);
  } else if (humanScore < computerScore) {
    return console.log(`The WINNER is the COMPUTER!.`);
  } else {
    return console.log(`We have a tie!.`);
  }
}

playGame();
