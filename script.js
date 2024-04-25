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

getComputerChoice();
