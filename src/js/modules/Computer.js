import Player from "./Player";

// Declare computer object using composition and factory function
const Computer = () => {
  const getRandomChoice = () => {
    const computerChoices = ["rock", "paper", "scissors"];
    // Define a variable to store random choice
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    // Return a random choice
    return computerChoice;
  };
  return { ...Player(), getRandomChoice };
};

export default Computer;