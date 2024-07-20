// Declare player module
const Player = (playerName) => {
  const name = playerName;
  let score = 0;
  const getScore = () => score;
  const scoreIncrement = () => {
    score += 1;
  };
  const scoreDecrement = () => {
    score -= 1;
  };
  const resetScore = () => {
    score = 0;
  };

  return {
    getScore,
    scoreIncrement,
    scoreDecrement,
    resetScore,
    name
  };

}

export default Player;