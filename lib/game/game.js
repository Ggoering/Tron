import GameState from './classes/GameState.js'
import Grid from './classes/Grid.js'
import Player from './classes/Player.js'
import "../style.css";

// Canvas
const canvas = document.getElementById('game')
const context = canvas.getContext('2d');

// Game Setup
var countDownRoundNumber = parseInt(document.getElementById('count-down').innerHTML, 10)

let game = new GameState(canvas, context, getDifficulty(), getSpeed(), {p1: 0, p2: 0});


function startGame(game) {
  requestAnimationFrame(gameloop);
}

function gameloop() {
  game.displayScore();
  if (!game.roundOver) {
    game.draw(context)
  }
  requestAnimationFrame(gameloop)
}

// Event Listeners
window.addEventListener('keydown', moveHorizontally);
window.addEventListener('keydown', moveVertically);

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.which === game.controls.p1.stop) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // game.roundOver = false;
    let score = {p1: game.score.p1, p2: game.score.p2}
    game = new GameState(canvas, context, getDifficulty(), getSpeed(), score);
    document.getElementById('game-over').style.display = "none"
    addStartOverlay()
    StartNewMatch()
  }
})

// Event Functions
function moveVertically(event) {
  event.preventDefault();
  if (game.player1.speed.x) {
  switch (event.which) {
    case game.controls.p1.down:
      game.player1.moveDown();
      break
    case game.controls.p1.up:
      game.player1.moveUp();
      break
    }
  }
  if (game.player2.speed.x) {
  switch (event.which) {
    case game.controls.p2.down:
      game.player2.moveDown();
      break
    case game.controls.p2.up:
      game.player2.moveUp();
      break
    }
  }
}

function moveHorizontally(event) {
  event.preventDefault();
  if (game.player1.speed.y) {
  switch (event.which) {
    case game.controls.p1.right:
      game.player1.moveRight();
      break;
    case game.controls.p1.left:
      game.player1.moveLeft();
      break;
    }
  }
  if (game.player2.speed.y) {
  switch (event.which) {
    case game.controls.p2.right:
      game.player2.moveRight();
      break;
    case game.controls.p2.left:
      game.player2.moveLeft();
      document.getElementById()
      break;
  }}
}
document.getElementById('count-down').addEventListener("webkitAnimationIteration", countDownRepeat);
document.getElementById('count-down').addEventListener("webkitAnimationEnd", countDownEnd)


function StartNewMatch() {
  function pressEnter(event) {
    if (event.which === 13) {
      removeStartOverlay()
      countDownStart()
      setTimeout(function() {
        document.removeEventListener('keydown', pressEnter); },
        3000);
    }
  }
  document.addEventListener('keydown', pressEnter)
}


StartNewMatch()


function removeStartOverlay() {
  document.querySelector('.start-screen').style.display = "none"
}

function addStartOverlay() {
  document.querySelector('.start-screen').style.display = "flex"
}

function countDownStart() {
countDownRoundNumber = 3
document.querySelector('.count-down').style.display = 'flex'
document.querySelector('.count-down').style.animation = "countDown 1s 3"
}

function countDownRepeat() {
  countDownRoundNumber += -1
  document.querySelector('.count-down').innerHTML = countDownRoundNumber
}

function countDownEnd() {
  document.querySelector('.count-down').style.display = 'none'
  setupGame();
}

function setupGame() {
  game.difficulty = getDifficulty();
  game.setupEnvironment()
  game.player1.color = getP1Color();
  game.player2.color = getP2Color();
  startGame(game)
}

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
  const selection = document.getElementsByName("p1-color");
  return selection[0].options[selection[0].options.selectedIndex].value;
}

function getP2Color() {
  const selection = document.getElementsByName("p2-color");
  return selection[0].options[selection[0].options.selectedIndex].value;
}
