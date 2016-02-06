var elSelectChoice, elResponse; // Declare variables
elSelectChoice = document.getElementById('choices');
elResponse   = document.getElementById('result');

function capitalize(value) {
  return value[0].toUpperCase() + value.substring(1);
}

function getWinner() {
  var comp = Math.random();
  if (comp <= 0.19) {
    comp = "rock";
  }
  else if (comp <= 0.39) {
    comp = "paper";
  }
  else if (comp <= 0.59) {
    comp = "scissors";
  }
  else if (comp <= 0.79 ) {
    comp = "lizard";
  }
  else {
    comp = "spock";
  }

  var input = this.options[this.selectedIndex].value;

  if (input === "") {
    elResponse.innerHTML = '';
  }
  else if (input === comp) {
    elResponse.innerHTML = 'Tie!';
  }
  else if ((input === "rock" && comp !== "paper") && (input === "rock" && comp !== "spock")) {
    elResponse.innerHTML = 'Rock Beats ' + capitalize(comp) + '. You Win!';
  }
  else if ((input === "paper" && comp !== "scissors") && (input === "paper" && comp !== "lizard")) {
    elResponse.innerHTML = 'Paper Beats ' + capitalize(comp) + '. You Win!';
  }
  else if ((input === "scissors" && comp !== "rock") && (input === "scissors" && comp !== "spock")) {
    elResponse.innerHTML = 'Scissors Beats ' + capitalize(comp) + '. You Win!';
  }
  else if ((input === "lizard" && comp !== "rock") && (input === "lizard" && comp !== "scissors")) {
    elResponse.innerHTML = 'Lizard Beats ' + capitalize(comp) + '. You Win!';
  }
  else if ((input === "spock" && comp !== "lizard") && (input === "spock" && comp !== "paper")) {
    elResponse.innerHTML = 'Spock Beats ' + capitalize(comp) + '. You Win!';
  }
  else {
    elResponse.innerHTML = capitalize(comp) + ' Beats ' + capitalize(input) + '. You Lose!';
  }
}

elSelectChoice.addEventListener('change', getWinner, false);
elSelectChoice.addEventListener('keyup', getWinner, false);
