// eslint-disable-next-line import/no-extraneous-dependencies
import "normalize.css";
import "../css/index.css";
import { largeModal, smallModal } from "./components/modal-component/Modal";
import createFirstStageUI from "./modules/UI/stageOneUI";
import createSecondStageUI from "./modules/UI/stageTwoUI";
import displayResult from "./modules/UI/displayResult";


import { playRound, randomComputerChoice } from "./general";
import Player from "./modules/Player";

export const player = Player("player");

const gameSection = document.querySelector(".game-section");
let computerChoice = "";
let playerChoice = "";

// Define a function to play the game
const screenController = () => {
  // Define general variables

  const firstStageWithEventListeners = () => { 
    gameSection.innerHTML = createFirstStageUI();
  
    const itemsButtons = document.querySelectorAll(".game-item");
    itemsButtons.forEach( btn => {
      btn.addEventListener("click", () => {
        computerChoice = randomComputerChoice();
        playerChoice = btn.dataset.name;
        secondStageWithEventListeners();
    })
  })
}

function secondStageWithEventListeners() {
  const scoreResult = document.querySelector(".result");
  gameSection.innerHTML = createSecondStageUI(playerChoice, computerChoice);

  const result = playRound(playerChoice, computerChoice);
  scoreResult.textContent = player.getScore();
  gameSection.innerHTML += displayResult(result);

  const playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", ()=>{
    firstStageWithEventListeners();
  })

 
}


firstStageWithEventListeners();


function loadLayout() {
  const container = document.querySelector(".container");

  if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
    container.insertAdjacentHTML("afterend", smallModal())
  } else {
    container.insertAdjacentHTML("afterend", largeModal())
  }

  const rulesBtn = document.querySelector(".rules-btn");
  rulesBtn.addEventListener("click", () => {
    document.querySelector(".modal-container").classList.remove("hidden");
  });
  const colseBtn = document.querySelector(".close-btn");
  colseBtn.addEventListener("click", ()=>{
    document.querySelector(".modal-container").classList.add("hidden");
  })

}

// Load the appropriate layout on initial load
loadLayout();

// Add an event listener to handle screen resize
window.addEventListener("resize", loadLayout);




};





screenController();
