import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
import "../style.css";

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

// this will be set by gamestate (this is just for now)
let specs = {
  width: canvas.width * 0.8,
  height: canvas.height * 0.8,
  canvas: canvas,
  lines: 20
}

var grid = new Grid(specs);
var player1 = new Player(grid.x + 200, grid.y + 200, 10, 10, "#FF6663");
var player2 = new Player(grid.width - 200, grid.height - 200, 10, 10, "#DDD");


requestAnimationFrame(function gameloop() {
  canvas.focus()
  grid.draw(context)
  player1.moveTrail()
  player1.moveHead();
  player2.moveHead();
  player1.drawBike(context)
  player2.drawHead(context);
  player1.collision(player2, context);
  player1.collisionBorder(grid);
  player1.collision(player1, context);
  player2.collision(player1, context);
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
  if (player1.speedx) {
  switch (event.which) {
    case keyboard1.down:
      player1.xpos -= player1.speedx
      player1.speedx = 0
      player1.speedy = 1;
      player1.ypos += player1.width
      break
    case keyboard1.up:
      player1.xpos -= player1.speedx
      player1.speedx = 0
      player1.speedy = -1;
      player1.ypos -= player1.width
      break
    }
}})

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (player1.speedy) {
  switch (event.which) {
    case keyboard1.right:
      player1.ypos -= player1.speedy
      player1.speedx = 1
      player1.speedy = 0
      player1.xpos += player1.height
      break
    case keyboard1.left:
      player1.ypos -= player1.speedy
      player1.speedx = -1;
      player1.speedy = 0
      player1.xpos -= player1.height
      break
}
}})
//     case keyboard1.stop:
//       if (pause) {
//         player1.speedx = 1
//         player1.speedy = 0
//       } else {
//         pause = true;
//         player1.speedx = 0
//         player1.speedy = 0
//       }
//       break
//   }
// })
