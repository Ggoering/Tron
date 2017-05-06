export default class Player {
  constructor(xPos, yPos, color, velocity) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = 14;
    this.velocity = velocity;
    this.speed = {x: this.velocity, y: 0};
    this.lives = 3;
    this.color = color;
    this.head = [this.xPos, this.yPos];
    this.trail = [];
    this.trailSize = 8;
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
  context.fillRect(this.xPos, this.yPos, this.trailSize, this.trailSize)
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
    for (var i = 0; i < player.trail.length - (player.trailSize - player.velocity); i++) {
      if (player.trail[i][0] <= this.xPos &&
          player.trail[i][2] >= this.xPos &&
          player.trail[i][1] <= this.yPos &&
          player.trail[i][3] >= this.yPos ||

          player.trail[i][0] <= this.xPos + this.trailSize &&
          player.trail[i][2] >= this.xPos + this.trailSize &&
          player.trail[i][1] <= this.yPos &&
          player.trail[i][3] >= this.yPos ||

          player.trail[i][0] <= this.xPos  &&
          player.trail[i][2] >= this.xPos  &&
          player.trail[i][1] <= this.yPos + this.trailSize &&
          player.trail[i][3] >= this.yPos + this.trailSize ||

          player.trail[i][0] <= this.xPos + this.trailSize &&
          player.trail[i][2] >= this.xPos + this.trailSize &&
          player.trail[i][1] <= this.yPos + this.trailSize &&
          player.trail[i][3] >= this.yPos + this.trailSize){
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
  moveRight(context) {
    this.xPos += this.trailSize+.1
    this.speed.x = this.velocity
    this.speed.y = 0
    this.moveTrail()
  }

  moveLeft() {
    this.xPos -= this.trailSize+.1
    this.speed.x = -this.velocity;
    this.speed.y = 0
    this.moveTrail()
  }

  moveUp() {
    this.yPos -= this.trailSize+.1
    this.speed.x = 0
    this.speed.y = -this.velocity;
    this.moveTrail()
  }

  moveDown() {
    this.yPos += this.trailSize+.1
    this.speed.x = 0
    this.speed.y = this.velocity;
    this.moveTrail()
  }

}
