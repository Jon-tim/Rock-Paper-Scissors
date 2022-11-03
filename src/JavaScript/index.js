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

//Computer's choice
// Made the three choice available for the computer to make a choice from, then destructured it into an object. Why? Well, I found out that when I destructured it into an array, they shared the same css properties and weren't uique. So I used an object, biut I still witnessed same issue, but got over it using a JavaScript ptoperty and I didn't think it was necessary to touch the code anymore since it  was working already....looool, I'll check later is it can work with Arrays too.

// Oh Update: It worked with array toooooo..... I love it and will use it.

// const compChoice = { ...choices };
const compChoice = [...choices];

//function to make computer auto select:
function autoSelect(param) {
  let clone = param.cloneNode(true);

  //   let randomize = Math.floor(Math.random() * Object.keys(compChoice).length);

  let randomize = Math.floor(Math.random() * compChoice.length);

  compChoice[randomize].style.display = "flex";
  //   console.log(compChoice[randomize]);
  if (compChoice[randomize] === param) {
    compSlot.prepend(clone);
    console.log(clone, param);
  } else {
    compSlot.prepend(compChoice[randomize]);
  }
}

choices.forEach((i) => {
  i.addEventListener("click", (e) => {
    choices.forEach((a) => {
      if (i != a) {
        a.style.display = "none";
        triangle.style.display = "none";
        choiceBoard.style.display = "none";
        gameOnBoard.style.display = "flex";
        yourChoice.prepend(i);
      }
    });
    setTimeout(() => {
      autoSelect(i);
    }, 2000);
  });
});

//Function to display the rules of the game

rules.addEventListener("click", () => {
  rulesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";
});

// Logic of the game
