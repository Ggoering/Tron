var GameState = require("./GameState.js");
var Player = require("./classes/Player.js");
require("./style.css");

var canvas = document.getElementById('game')
var context = canvas.getContext('2d');

var game = new GameState(context);
var player1 = new Player(20, 20, context, "#FF6663");
var player2 = new Player(50, 50, context, "#DDD");

player1.draw();
player2.draw();


requestAnimationFrame(function gameloop() {
  player1.draw();
  player1.up();
  requestAnimationFrame(gameloop)
});
