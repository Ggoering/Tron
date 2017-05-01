function GameState(context) {
  this.context = context;
}

GameState.prototype.draw = function () {
  this.context.fillRect(50, 50, 50, 50);
};

module.exports = GameState;
