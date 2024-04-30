let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let weapon = Math.round(Math.random() * 2);

  if (weapon === 0) {
    return "Rock";
  } else if (weapon === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  const form = document.getElementById("gameForm");
  const selectedWeapon = form.querySelector('input[name="weapon"]:checked');
  if (selectedWeapon) {
    const humanWeapon = selectedWeapon.value;
    document.getElementById("hWeapon").textContent =
      "Your choice: " + humanWeapon;
    return humanWeapon;
  } else {
    document.getElementById("hWeapon").textContent = "";
    return null;
  }
}

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

getHumanChoice();
getComputerChoice();
