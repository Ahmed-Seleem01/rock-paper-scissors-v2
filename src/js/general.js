
// Declare player object as Player instance using factory function

import { player } from ".";



const createButton = (name, src, classes ) => (`
    <button data-name="${name}" class = "game-item ${classes}">
        <img src=${src}  alt=${name} />
    </button>
    `)

export  const createPlaceHolder = () => (`
        <div data-name="placeholder" class = "placeholder">
            
        </div>
        `)

export const randomComputerChoice = ()=>{
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    
        return choices[randomNum];
    }



    // Define a function for playing one round
    export function playRound(playerSelection, computerSelection) {
      let roundResult = "";
      // Make sure the choices is case-insensitive
      const playerChoice = playerSelection.toLowerCase();
      const computerChoice = computerSelection.toLowerCase();
      // Make a condition to check if the player wins or loses against the computer
      if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
       
        player.scoreIncrement();
        roundResult = "You Win";
      } else if (
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "rock")
      ) {

        player.scoreDecrement();
        roundResult = "You Lose";
      } else {
        roundResult = "Draw";
      }
      return roundResult;
    }

  export default createButton;

