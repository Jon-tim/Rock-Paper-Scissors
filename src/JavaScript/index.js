"use strict";
const choices = document.querySelectorAll(".circles");
const triangle = document.querySelector(".triangle");
const rules = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".rules");
const closeModal = document.querySelector(".close-btn");
const gameBoard = document.querySelector(".game-play");

choices.forEach((i) => {
  i.addEventListener("click", (e) => {
    choices.forEach((a) => {
      if (i != a) {
        // gameBoard.classList.add("selected");
        a.style.display = "none";
        triangle.style.display = "none";
      }
    });
  });
});

//Function to display the rules of the game

// function showRule(params) {}

rules.addEventListener("click", () => {
  rulesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";
});
