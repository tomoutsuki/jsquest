// output.js
let gameController;

function init(controller) {
  gameController = controller;
}

function display(message) {
  // Display output (you can replace this with your own output handling logic)
  console.log(message);
}

module.exports = {
  init,
  display,
};