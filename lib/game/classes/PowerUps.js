class Powerups {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  randomPosition(game) {
    return game.grid.x + game.grid.width/2;
  }

  draw(context, game) {
    context.fillStyle = "magenta";
    context.fillRect(this.randomPosition(game), this.randomPosition(game), this.size, this.size);
  }
}

export default Powerups
