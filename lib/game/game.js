import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
import "../style.css";

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

const game = new GameState(canvas, context, 'hard');

game.start();

function reset() {
  player1 = new Player(grid.x + 200, grid.y + 200, 20, 10, "#FF6663")
}

requestAnimationFrame(function gameloop() {
  canvas.focus()
  if (!game.roundOver) {
    game.grid.draw(context);
    player1.moveTrail()
    player1.moveHead();
    // player2.moveHead();
    player1.drawBike(context)
    // player2.drawHead(context);
    player1.collision(player2, context, game);
    player1.collisionSelf();
    player1.collisionBorder(game.grid, game);
    player1.collision(player1, context);
    // player2.collision(player1, context);
  } else {
    reset()
  }
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
    case game.p1Controls.down:
      player1.moveDown();
      break
    case game.p1Controls.up:
      player1.moveUp();
      break
    }
}})

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (player1.speedy) {
  switch (event.which) {
    case game.p1Controls.right:
      player1.moveRight();
      break
    case game.p1Controls.left:
      player1.moveLeft();
      break
}
}})

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.which === game.p1Controls.stop) {
    game.roundOver = false;
    console.log(game.roundOver);
  }
})
