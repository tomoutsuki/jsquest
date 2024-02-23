// index.js
const game = require('./game');
const input = require('./input');
const output = require('./output');

// Initialize the game
game.init(input, output);

// Start listening for user input
input.listen();