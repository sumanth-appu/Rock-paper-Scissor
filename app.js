const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_VALUE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
function startgame(){
  console.log("game is starting~!!!!");
}
let gamerunning = false;
// input  fields for player
const getInput = function () {
  selection = prompt(`${ROCK},${PAPER},${SCISSORS}`, "").toUpperCase();
  console.log( "PLAYER CHOICE :",selection);
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid Input! We choice ${DEFAULT_VALUE} for you`);
    return DEFAULT_VALUE;
  }
  return selection;
};

//computer  choice
const getComputerChoice = function () {
  const randomValue = (Math.random());//fLOOR AND CEIL SHOULD NOT BE DONE.

  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue <= 0.68) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//ACTUAL LOGIC OF THE rOCK Paper scissors
// const checkWinner = function (pChoice, cChoice) {
//   if (pChoice === cChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (pChoice === ROCK && cChoice === SCISSORS) ||
//     (pChoice === SCISSORS && cChoice === PAPER) ||
//     (pChoice === PAPER && cChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WIN;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
//   gamerunning = false;
// };

// this is a arrow function (=>) id the keysymbol
const checkWinner = (pChoice, cChoice) => {
    if (pChoice === cChoice) {
      return RESULT_DRAW;
    } else if (
      (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === ROCK)
    ) {
      return RESULT_PLAYER_WIN;
    } else {
      return RESULT_COMPUTER_WINS;
    }
    gamerunning = false;
  };

// this is anonymous function declaration.
startGameBtn.addEventListener("click", function startgame() {
  if (gamerunning) {
    return;
  }
  gamerunning = true;
  console.log("Game is starting...>>>...>>>...>>>...");
  const playerSelection = getInput();
  const computerChoice = getComputerChoice();
  const Winner = checkWinner(playerSelection, computerChoice);
  
  console.log(Winner);
  //displaying the result on scree
  let  messageText = `You picked ${playerSelection} and computer picked  ${computerChoice} Hence `;
  if (Winner=== RESULT_DRAW){
    messageText +="It's a Draw!";
  } else if(Winner=== RESULT_PLAYER_WIN){
    messageText += "Congratulations You Win!" ;
  }else{
     messageText += "Better Luck Next Time! Computer wins.";
  }
  alert(messageText);
  gamerunning = false;
});
