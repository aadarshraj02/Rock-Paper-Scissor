let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const playGame = (userChoice) => {
  console.log("choice clicked", userChoice);
  const compChoice = generateComputerChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
  }
};

const generateComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function drawGame() {
  console.log("Game Draw!!");
}
