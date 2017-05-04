import Grid from './Grid.js';

export default class GameState {
  constructor(canvas, context, difficulty) {
    this.canvas = canvas;
    this.context = context;
    this.difficulty = difficulty;
    this.roundOver = false;
    this.gameOver = false;
    this.p1Controls = {
      right: 39,
      left: 37,
      up: 38,
      down: 40,
      stop: 32
    }
  }


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

  start() {
    this.grid = new Grid(this.setDifficultyGrid());
    // this.grid.draw(this.context);
  }

}
