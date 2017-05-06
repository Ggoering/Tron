import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
import "../style.css";

// Canvas
const canvas = document.getElementById('game')
const context = canvas.getContext('2d');

// Game Setup
const game = new GameState(canvas, context, 'easy');
game.setupEnvironment();

var player1 = new Player(game.grid.x + 200, game.grid.y + 200, "#FF6663");
var player2 = new Player(game.grid.width - 200, game.grid.height - 200, "yellow");

const p1Sprite = new Image()
p1Sprite.src = game.imgSrc.right;
// p1Sprite.xpos = player1.xpos
// p1Sprite.ypos = player1.ypos


function reset() {
  player1 = new Player(game.grid.x + 200, game.grid.y + 200, "#FF6663")
  p1Sprite.src = game.imgSrc.right;
  player2 = new Player(game.grid.width - 200, game.grid.height - 200, "yellow");

}

function startGame() {
  requestAnimationFrame(function gameloop() {
    canvas.focus()
    if (!game.roundOver) {
      game.grid.draw(context);
      player1.moveHead(p1Sprite);
      player2.moveHead(p1Sprite);
      player1.moveTrail()
      player2.moveTrail()
      player1.drawPlayer(context, p1Sprite)
      player2.drawPlayer(context);

      player1.collision(game.grid, player2, context, game);
      player1.collision(game.grid, player1, context, game);
      player2.collision(game.grid, player2, context, game);
      player2.collision(game.grid, player1, context, game);
    } else {
      reset()
    }
    requestAnimationFrame(gameloop)
  });
}


// Event Listeners
window.addEventListener('keydown', moveVertically);
window.addEventListener('keydown', moveHorizontally);

// Event Functions
function moveVertically(event) {
  event.preventDefault();
  if (player1.speed.x) {
  switch (event.which) {
    case game.controls.p1.down:
      player1.moveDown();
      // p1Sprite.src = game.imgSrc.down
      break
    case game.controls.p1.up:
      player1.moveUp();
      // p1Sprite.src = game.imgSrc.up
      break
    }
  }
  if (player2.speed.x) {
  switch (event.which) {
    case game.controls.p2.down:
      player2.moveDown();
      // p1Sprite.src = game.imgSrc.down
      break
    case game.controls.p2.up:
      player2.moveUp();
      // p1Sprite.src = game.imgSrc.up
      break
    }
  }
}

function moveHorizontally(event) {
  event.preventDefault();
  if (player1.speed.y) {
  switch (event.which) {
    case game.controls.p1.right:
      player1.moveRight();
      // p1Sprite.src = game.imgSrc.right
      break;
    case game.controls.p1.left:
      player1.moveLeft();
      // p1Sprite.src = game.imgSrc.left
      break;
    }
  }
  if (player2.speed.y) {
  switch (event.which) {
    case game.controls.p2.right:
      player2.moveRight();
      // p1Sprite.src = game.imgSrc.right
      break;
    case game.controls.p2.left:
      player2.moveLeft();
      document.getElementById()
      // p1Sprite.src = game.imgSrc.left
      break;
  }}
}

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.which === game.controls.p1.stop) {
    game.roundOver = false;
    console.log(game.roundOver);
  }
})

function removeStartOverlay() {
  document.querySelector('.start-screen').style.display = "none"
}
document.addEventListener('keydown', (event) => {
  if (event.which === 13) {
    removeStartOverlay()
    game.difficulty = getDifficulty();
    game.setupEnvironment()
    player1.color = getP1Color();
    player2.color = getP2Color();
    player1.velocity = getSpeed();
    player2.velocity = getSpeed();
    console.log(getSpeed());
    startGame()

  }
})


function getDifficulty() {
  let radios = document.getElementsByName('difficulty');
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          return radios[i].value;
      }
  }
}

function getSpeed() {
  let radios = document.getElementsByName('speed');
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          return parseInt(radios[i].value);
      }
  }
}

function getP1Color() {
  const e = document.getElementsByName("p1-color");
  return e[0].options[e[0].options.selectedIndex].value;
}

function getP2Color() {
  const e = document.getElementsByName("p2-color");
  return e[0].options[e[0].options.selectedIndex].value;
}




//Player
// TODO: Player 2 Collision
// TODO: Edge Colission
// TODO: fix the hea


//menu html
// TODO: add play button
// TODO: add settings button

//Html
// TODO: Score
// TODO: lives
// TODO: round number
// TODO: you lose/win message

//Game
// TODO: gameover
// TODO: lives
// TODO: roundover
