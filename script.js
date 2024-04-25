function getComputerChoice() {
  let weapon = Math.round(Math.random() * 2);

  if (weapon === 0) {
    document.getElementById("cpuWeapon").innerHTML = `Rock`;
  } else if (weapon === 1) {
    document.getElementById("cpuWeapon").innerHTML = `Paper`;
  } else {
    document.getElementById("cpuWeapon").innerHTML = `Scissors`;
  }

  //   console.log((document.getElementById("cpuWeapon").innerHTML = `${weapon}`));
}

getComputerChoice();
