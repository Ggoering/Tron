import GameState from './classes/GameState.js'
// var Player = require("./classes/Player.js");
import "../style.css";
import Player from './classes/Player.js'
const keyboard1 = {
  right: 39,
  left: 37,
  up: 38,
  down: 40
}
const keyboard2 = {
  right: 68,
  left: 65,
  up: 87,
  down: 83
}

var canvas = document.getElementById('game')
var context = canvas.getContext('2d');

var game = new GameState();
console.log(game.ok);
var player1 = new Player(20, 20, 20, 20, "#FF6663");
var player2 = new Player(50, 50, 20, 20, "#DDD");

requestAnimationFrame(function gameloop() {
  player1.draw(context);
  player2.draw(context);
  player1.move()
  requestAnimationFrame(gameloop)
});

document.addEventListener('keydown', (event) =>{
  switch (event.which) {
    case keyboard1.down:
      player1.speedx = 0
      player1.speedy = 1
      break
    case keyboard1.up:
      player1.speedx = 0
      player1.speedy = -1
      break
    case keyboard1.right:
      player1.speedx = 1
      player1.speedy = 0
      break
    case keyboard1.left:
      player1.speedx = -1
      player1.speedy = 0
      break
  }})
