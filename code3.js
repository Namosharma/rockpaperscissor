let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#computer-score");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  console.log("user choice=", userchoice);
  //generate computer choice
  const compchoice = gencompchoice();
  console.log("comp choice=", compchoice);

  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinnner(userwin, userchoice, compchoice);
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randi = Math.floor(Math.random() * 3);
  return options[randi];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "game Draw,Play Again!";
  msg.style.backgroundColor = "pink";
};

const showWinnner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    console.log("YOU WIN!");
    userscore++;
    uscore.innerText = userscore;
    msg.innerText = `You win!!! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    cscore.innerText = compscore;
    console.log("YOU LOOSE!");
    msg.innerText = `You lose!!  ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
