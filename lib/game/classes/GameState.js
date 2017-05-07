import Grid from './Grid.js';
import Player from './Player.js';

export default class GameState {
  constructor(canvas, context, difficulty, velocity) {
    this.canvas = canvas;
    this.context = context;
    this.difficulty = difficulty;
    this.roundOver = false;
    this.gameOver = false;
    this.velocity = velocity
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
    this.p1Controls = {
      right: 39,
      left: 37,
      up: 38,
      down: 40,
      stop: 32
    }
    this.imgSrc = {
      up: './lib/game/assets/p1_bike_up.png',
      down: './lib/game/assets/p1_bike_down.png',
      left: './lib/game/assets/p1_bike_left.png',
      right: './lib/game/assets/p1_bike_right.png'
    }
  }

  // Environment Functions
  setupEnvironment() {
    this.grid = new Grid(this.setDifficultyGrid());
    this.player1 = new Player(this.grid.x, this.grid.y + this.grid.height * 0.8, 'red', this.velocity, 'Player 1')
    this.player2 = new Player(this.grid.x, this.grid.y + this.grid.height * 0.2, 'blue', this.velocity, 'Player 2')
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
