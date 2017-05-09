import Grid from './Grid.js';
import Player from './Player.js';

class GameState {
  constructor(canvas, context, difficulty, velocity, score) {
    this.canvas = canvas;
    this.context = context;
    this.difficulty = difficulty;
    this.roundOver = false;
    this.velocity = velocity
    this.score = {
      p1: score.p1,
      p2: score.p2
    }
    this.controls = {
      p1: {
        right: 39,
        left: 37,
        up: 38,
        down: 40,
        stop: 32
      },
      p2: {
        right: 68,
        left: 65,
        up: 87,
        down: 83
      }
    }
  }

  displayScore() {
    document.getElementById('p1-score').innerText = this.score.p1;
    document.getElementById('p2-score').innerText = this.score.p2;
  }

  draw(context) {
    this.grid.draw(context);
    this.drawP1(context);
    this.drawP2(context);
    this.collisionDetection();
  }

  drawP1(context) {
    this.player1.moveHead();
    this.player1.moveTrail()
    this.player1.drawPlayer(context)
  }

  drawP2(context) {
    this.player2.moveHead();
    this.player2.moveTrail()
    this.player2.drawPlayer(context)
  }

  collisionDetection() {
    this.player1.collisions(this, this.player2);
    this.player2.collisions(this, this.player1);
  }

  // Environment Functions
  setupEnvironment() {
    this.grid = new Grid(this.setDifficultyGrid());
    this.player1 = new Player(
      this.grid.x + 80, this.grid.y + this.grid.height * 0.8, 'red', this.velocity, 'Player 1', 'p1', 0, this.velocity*-1)
    this.player2 = new Player(this.grid.x + this.grid.width - 80, this.grid.y + this.grid.height * 0.2, 'blue', this.velocity, 'Player 2', 'p2', 0, this.velocity)
  }

  // Difficulty Functions
  setDifficultyGrid() {
    switch (this.difficulty) {
      case 'easy':
        return this.easyEnvironment();
      case 'normal':
        return this.normalEnvironment();
      case 'hard':
        return this.hardEnvironment();
      case 'legendary':
        return this.legendaryEnvironment();
    }
  }

  easyEnvironment() {
    return {
      width: this.canvas.width * 0.8,
      height: this.canvas.height * 0.8,
      canvas: this.canvas,
      lines: 20
    }
  }

  normalEnvironment() {
    return {
      width: this.canvas.width * 0.7,
      height: this.canvas.height * 0.7,
      canvas: this.canvas,
      lines: 12
    }
  }

  hardEnvironment() {
    return {
      width: this.canvas.width * 0.6,
      height: this.canvas.height * 0.6,
      canvas: this.canvas,
      lines: 10
    }
  }

  legendaryEnvironment() {
    return {
      width: this.canvas.width * 0.3,
      height: this.canvas.height * 0.3,
      canvas: this.canvas,
      lines: 2
    }
  }
}

export default GameState;
