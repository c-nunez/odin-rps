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
  let form = document.querySelector("form");
  const humanWeapon = document.querySelector("#hWeapon");

  form.addEventListener(
    "submit",
    (event) => {
      const data = new FormData(form);
      let output = "";
      for (const entry of data) {
        output = `Your weapon is: ${entry[1]}\r`;
      }
      humanWeapon.innerText = output;
      event.preventDefault();
    },
    false
  );
}

getHumanChoice();
getComputerChoice();
