let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const playGame = (userChoice) => {
  console.log("choice clicked", userChoice);
};

const generateComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
  });
});
