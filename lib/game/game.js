import GameState from './classes/GameState.js'
// var Player = require("./classes/Player.js");
import "../style.css";
import Player from './classes/Player.js'
import Grid from './classes/Grid.js'


const keyboard1 = {
  right: 39,
  left: 37,
  up: 38,
  down: 40,
  stop: 32
}
const keyboard2 = {
  right: 68,
  left: 65,
  up: 87,
  down: 83,
}

let pause = false;

var canvas = document.getElementById('game')
var context = canvas.getContext('2d');

var newGrid = new Grid(canvas.width * .80, canvas.height * .80, canvas, '#FFF')
var game = new GameState();
var player1 = new Player(20, 20, 20, 20, "#FF6663");
var player2 = new Player(50, 50, 20, 20, "#DDD");

newGrid.draw(context)

requestAnimationFrame(function gameloop() {
  player1.draw(context);
  player2.draw(context);
  player1.move()
  requestAnimationFrame(gameloop)
});

function animationFrame() {
  setInterval(renderGame, 30);
}


function renderGame() {
  player1.draw(context);
  player2.draw(context);
  player1.move()
}

// animationFrame()

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  switch (event.which) {
    case keyboard1.down:
      player1.speedx = 0
      player1.speedy = player1.height;
      break
    case keyboard1.up:
      player1.speedx = 0
      player1.speedy = -player1.height;
      break
    case keyboard1.right:
      player1.speedx = player1.width
      player1.speedy = 0
      break
    case keyboard1.left:
      player1.speedx = -player1.width;
      player1.speedy = 0
      break
    case keyboard1.stop:
      if (pause) {
        pause = false;
        player1.speedx = 1
        player1.speedy = 0
      } else {
        pause = true;
        player1.speedx = 0
        player1.speedy = 0
      }
      console.log(pause);
      break
  }
})
