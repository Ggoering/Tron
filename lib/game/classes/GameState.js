import Grid from './Grid.js';

export default class GameState {
  constructor(canvas, context, difficulty) {
    this.canvas = canvas;
    this.context = context;
    this.difficulty = difficulty;
    this.roundOver = false;
    this.gameOver = false;
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
      up: './lib/game/assets/p1_bike_vert.png',
      down: './lib/game/assets/p1_bike_vert.png',
      left: './lib/game/assets/p1_bike_vert.png',
      right: './lib/game/assets/p1_bike_vert.png'
    }
  }

  // Environment Functions
  setupEnvironment() {
    this.grid = new Grid(this.setDifficultyGrid());
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
