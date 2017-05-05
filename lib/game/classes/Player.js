export default class Player {
  constructor(xPos, yPos, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = 14;
    this.velocity = 3;
    this.speed = {x: this.velocity, y: 0};
    this.lives = 3;
    this.color = color;
    this.head = [this.xPos, this.yPos];
    this.trail = [];
    this.trailSize = 5;
  }

  // Draw Functions
  drawPlayer(context, img) {
    context.fillStyle = this.color;
    this.drawTrail(context)
    context.fillStyle = "magenta";
    this.drawHead(context, img)
  }

  drawHead(context, img) {
  // context.drawImage(img, img.xPos, img.yPos);
  context.fillRect(this.xPos, this.yPos, 2, 5)
  context.fillStyle="blue"
  }

  drawTrail(context) {
    for (let i = 0; i < this.trail.length; i++) {
      context.fillRect(this.trail[i][0], this.trail[i][1], this.trailSize, this.trailSize)
    }
  }

  moveHead(img) {
    // img.xPos = this.xPos
    // img.yPos = this.yPos
    this.xPos += this.speed.x
    this.yPos += this.speed.y
  }

  moveTrail() {
    const dy = this.yPos;
    const dx = this.xPos;
    const dxT = dx + this.trailSize
    const dyT = dy + this.trailSize
    this.trail.push([dx, dy, dxT, dyT])
  }

  // Collision Functions
  collision(grid, player, context, game) {
    this.collisionBorder(grid, game);
    for (var i = 0; i < player.trail.length -20; i++) {
      if (player.trail[i][0] <= this.xPos &&
        player.trail[i][2] >= this.xPos &&
        player.trail[i][1] <= this.yPos &&
        player.trail[i][3] >= this.yPos) {
        game.roundOver = true
      }
    }
  }

  collisionBorder(grid, game) {
    if (this.xPos > grid.width + grid.x) {
      console.log("hit right");
      game.roundOver = true;
    }
    if (this.xPos < grid.x) {
      console.log("hit left")
      game.roundOver = true;
    }
    if (this.yPos < grid.y) {
      console.log("hit top")
      game.roundOver = true;
    }
    if (this.yPos > grid.height + grid.y) {
      console.log("hit bot")
      game.roundOver = true;
    }
  }

  // Move Direction Functions
  moveRight() {
    this.yPos -= this.speed.y
    this.speed.x = this.velocity
    this.speed.y = 0
    this.xPos += this.trailSize
  }

  moveLeft() {
    this.yPos -= this.speed.y
    this.speed.x = -this.velocity;
    this.speed.y = 0
    this.xPos -= this.trailSize
  }

  moveUp() {
    this.xPos -= this.speed.x
    this.speed.x = 0
    this.speed.y = -this.velocity;
    this.yPos -= this.trailSize
  }

  moveDown() {
    this.xPos -= this.speed.x
    this.speed.x = 0
    this.speed.y = this.velocity;
    this.yPos += this.trailSize
  }

}
