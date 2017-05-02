function Player(x, y, context, color) {
  this.context = context;
  this.width = 10;
  this.height = 10;
  this.x = x;
  this.y = y;
  this.dy = 1;
  this.color = color;
}

Player.prototype.draw = function () {
  this.context.fillStyle = this.color;
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.up = function () {
  this.y += this.dy;
};

module.exports = Player;
