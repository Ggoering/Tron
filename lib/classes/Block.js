function Block(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Block.prototype.move = function() {
  this.x++;
  return this;
}

Block.prototype.draw = function(context) {
  context.fillRect(
    this.x,
    this.y,
    this.width,
    this.height
  )
}

module.exports = Block;
