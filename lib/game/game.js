import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
import "../style.css";

// Canvas
const canvas = document.getElementById('game')
const context = canvas.getContext('2d');

// Game Setup
const game = new GameState(canvas, context, 'hard');
game.setupEnvironment();

var player1 = new Player(game.grid.x + 200, game.grid.y + 200, "#FF6663");
var player2 = new Player(game.grid.width - 200, game.grid.height - 200, "#DDD");

const p1Sprite = new Image()
p1Sprite.src = game.imgSrc.right;
// p1Sprite.xpos = player1.xpos
// p1Sprite.ypos = player1.ypos


function reset() {
  player1 = new Player(game.grid.x + 200, game.grid.y + 200, "#FF6663")
  p1Sprite.src = game.imgSrc.right;
}

requestAnimationFrame(function gameloop() {
  canvas.focus()
  if (!game.roundOver) {
    game.grid.draw(context);
    player1.moveTrail()
    player1.moveHead(p1Sprite);
    // player2.moveHead();

    player1.drawBike(context, p1Sprite)
    // player2.drawHead(context);
    player1.collision(player2, context, game);
    player1.collisionBorder(game.grid, game);
    player1.collision(player1, context, game);
    player2.collision(player1, context);
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

// Event Listeners
window.addEventListener('keydown', moveVertically);
window.addEventListener('keydown', moveHorizontally);

// Event Functions
function moveVertically(e) {
  event.preventDefault();
  if (player1.speedx) {
  switch (event.which) {
    case game.controls.p1.down:
      player1.moveDown();
      p1Sprite.src = game.imgSrc.down
      break
    case game.controls.p1.up:
      player1.moveUp();
      p1Sprite.src = game.imgSrc.up
      break
    }
  }
}

function moveHorizontally(e) {
  event.preventDefault();
  if (player1.speedy) {
  switch (event.which) {
    case game.controls.p1.right:
      player1.moveRight();
      p1Sprite.src = game.imgSrc.right
      break;
    case game.controls.p1.left:
      player1.moveLeft();
      p1Sprite.src = game.imgSrc.left
      break;
    }
  }
}

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.which === game.controls.p1.stop) {
    game.roundOver = false;
    console.log(game.roundOver);
  }
})


//changed
// deleted global Grid
// add grid dimmensions to player
// add move vertically and move horizontally functions to event listener
