let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice clicekd", userChoice);
  });
});
