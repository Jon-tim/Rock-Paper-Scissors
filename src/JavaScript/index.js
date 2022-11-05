"use strict";
const choices = document.querySelectorAll(".circles");
const triangle = document.querySelector(".triangle");
const rules = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".rules");
const closeModal = document.querySelector(".close-btn");
const gameBoard = document.querySelector(".gameplay");
const choiceBoard = document.querySelector(".choices");
const gameOnBoard = document.querySelector(".game-on");

const yourChoice = document.querySelector(".user-choice");
const compSlot = document.querySelector(".slot");
const compSlotHolder = document.querySelector(".slot-holder");

const scoreBoard = document.querySelector(".score");

//available choices
// const paper = document.querySelector(".paper");
// const scissors = document.querySelector(".scissors");
// const rock = document.querySelector(".rock");

//Game Logic function
function gameLogic(playerChoice, computerChoice) {
  //setting the variables and assigning them via what each player's choice contains
  let paper1;
  let rock1;
  let scissors1;
  let paper2;
  let rock2;
  let scissors2;
  if (playerChoice.classList.contains("paper")) {
    paper1 = playerChoice;
  } else if (playerChoice.classList.contains("rock")) {
    rock1 = playerChoice;
  } else {
    scissors1 = playerChoice;
  }
  if (computerChoice.classList.contains("paper")) {
    paper2 = computerChoice;
  } else if (computerChoice.classList.contains("rock")) {
    rock2 = computerChoice;
  } else {
    scissors2 = computerChoice;
  }
  // Score determinant
  let currentScore = Number(scoreBoard.textContent);
  // let score;
  if (paper1 && paper2) {
    // console.log("draw");
    // currentScore;
    return;
  } else if (paper1 && rock2) {
    console.log("paper wins");
    scoreBoard.textContent =
      currentScore < 10 ? `0${currentScore + 1}` : currentScore;
    // console.log(currentScore);
  } else if (paper1 && scissors2) {
    // console.log("comp wins");

    currentScore = currentScore < 10 ? `0${currentScore - 1}` : currentScore--;
    if (currentScore < 1) {
      return (currentScore = `00`);
    }

    // scoreBoard.textContent =
  } else if (rock1 && rock2) {
    // console.log("draw");
    // currentScore;
    return;
  } else if (rock1 && paper2) {
    console.log("comp wins");
  } else if (rock1 && scissors2) {
    console.log("rock wins");
  } else if (scissors1 && scissors2) {
    // console.log("draw");
    return;
  } else if (scissors1 && paper2) {
    console.log("player wins");
  } else if (scissors1 && rock2) {
    console.log("comp wins");
  }

  scoreBoard.textContent = currentScore;
}

// console.log(scoreBoard.value++);

//Computer's choice
// Made the three choice available for the computer to make a choice from, then destructured it into an object. Why? Well, I found out that when I destructured it into an array, they shared the same css properties and weren't uique. So I used an object, biut I still witnessed same issue, but got over it using a JavaScript property and I didn't think it was necessary to touch the code anymore since it  was working already....looool, I'll check later is it can work with Arrays too.

// Oh Update: It worked with array toooooo..... I love it and will use it.

// const compChoice = { ...choices };
const compChoice = [...choices];

//function to make computer auto select:
function autoSelect(param) {
  let clone = param.cloneNode(true);

  //   let randomize = Math.floor(Math.random() * Object.keys(compChoice).length);

  let randomize = Math.floor(Math.random() * compChoice.length);

  compChoice[randomize].style.display = "flex";

  if (compChoice[randomize] === param) {
    compSlot.prepend(clone);
  } else {
    compSlot.prepend(compChoice[randomize]);
  }
  // console.log(compChoice[randomize]);
  //GAME LOGIC
  // if param is >
  gameLogic(param, compChoice[randomize]);
}

let randomSecs = Math.floor(Math.random() * 3) + 1;

function makeAChoice(params) {
  params.addEventListener("click", function changeBoard() {
    choices.forEach((a) => {
      if (params != a) {
        a.style.display = "none";
        triangle.style.display = "none";
        choiceBoard.style.display = "none";
        gameOnBoard.style.display = "flex";
        yourChoice.prepend(params);
      }
    });
    // console.log(params);
    setTimeout(() => {
      compSlotHolder.style.display = "none";
      //DON'T FORGET TO SET TIME IT TAKES TO DISPLAY COMPUTER'S CHOICE WHEN THE SCORE IS CLOSE TO 1 OR 2
      autoSelect(params);
    }, `${randomSecs}000`);
    params.removeEventListener("click", changeBoard);
  });
}

choices.forEach((i) => {
  makeAChoice(i);
});

//Function to display the rules of the game

rules.addEventListener("click", () => {
  rulesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
