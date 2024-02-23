// game.js
let inputController;
let outputController;

function init(input, output) {
  inputController = input;
  outputController = output;

  inputController.init(this);
  outputController.init(this);

  // Additional game initialization logic goes here
}

function handleInput(userInput) {
  // Handle user input and update the game state
  // You can add your own game logic here

  // Example: Display the received input
  outputController.display(`Received input: ${userInput}`);
}

module.exports = {
  init,
  handleInput,
};
