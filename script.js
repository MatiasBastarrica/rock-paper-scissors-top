// ### PSEUDOCOE ###
// ## LOGIC TO GET THE COMPUTER CHOICE ##

function getComputerChoice() {
  function GetOneTwoOrThree() {
    return Math.floor(Math.random() * (2 + 1) + 1);
  }
  let oneTwoThree = GetOneTwoOrThree();
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
