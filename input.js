// input.js
let gameController;

function init(controller) {
  gameController = controller;
}

function listen() {
  // Listen for user input (you can replace this with your own input handling logic)
  process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    gameController.handleInput(userInput);
  });
}

module.exports = {
  init,
  listen,
};
