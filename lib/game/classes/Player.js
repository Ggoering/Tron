export default class Player {

  constructor(xpos, ypos, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.height = 14;
    this.width = 14;
    this.velocity = 5;
    this.speedx = this.velocity;
    this.speedy = 0
    this.lives = 3
    this.color = color;
    this.head = [this.xpos, this.ypos];
    this.trail = [];
    this.direction = 'right';
    this.headOffset = 30;
    this.trailSize = 5
    this.collisionHead = ''
    this.trailCollide = []
  }

  drawHead(context, img) {
  // context.drawImage(img, img.xpos, img.ypos);
  context.fillRect(this.xpos, this.ypos, 2, 5)
  context.fillStyle="blue"
  }

  drawTrail(context) {
    for (let i = 0; i < this.trail.length; i++){
    context.fillRect(...this.trail[i])
    }
  }

  drawBike(context, img) {
    context.fillStyle = "orange"
    this.drawTrail(context)
    context.fillStyle = this.color
    this.drawHead(context, img)
  }

  moveHead(img) {
    img.xpos = this.xpos
    img.ypos = this.ypos
    this.xpos += this.speedx
    this.ypos += this.speedy
    this.head = `${this.xpos}, ${this.ypos}`;
  }

  moveTrail() {
    const dy = this.ypos + this.height/2 - this.trailSize/2;
    const dx = this.xpos + this.width/2 - this.trailSize/2;
    const dxT = dx + this.trailSize
    const dyT = dy + this.trailSize
    this.trail.push([dx, dy, this.trailSize, this.trailSize])
    this.trailCollide.push([dx,dy,dxT,dyT])
  }

collision(player, context, game) {
  for (var i = 0; i < player.trailCollide.length -20; i++) {
    if (player.trailCollide[i][0] <= player.xpos &&
    player.trailCollide[i][2] >= player.xpos &&
    player.trailCollide[i][1] <= player.ypos &&
    player.trailCollide[i][3] >= player.ypos) {
    console.log(player.trailCollide[i][0], player.trailCollide[i][2], player.xpos+player.headOffset, "hit")
    }
  }
}

// BUG: legendary position is recroding after
  collisionBorder(grid, game) {
    if (this.xpos > grid.width + grid.x - this.headOffset) {
      console.log("hit right");
      game.roundOver = true;
    }
    if (this.xpos < grid.x) {
      console.log("hit left")
      game.roundOver = true;
    }
    if (this.ypos < grid.y) {
      console.log("hit top")
      game.roundOver = true;
    }
    if (this.ypos > grid.height + grid.y - this.headOffset) {
      console.log("hit bot")
      game.roundOver = true;
    }
  }

  moveRight() {
    this.ypos -= this.speedy
    this.speedx = this.velocity
    this.speedy = 0
    this.xpos += this.trailSize
    this.direction = 'right';
  }

  moveLeft() {
    this.ypos -= this.speedy
    this.speedx = -this.velocity;
    this.speedy = 0
    this.xpos -= this.trailSize
    this.direction= 'left';
  }

  moveUp() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = -this.velocity;
    this.ypos -= this.trailSize
    this.direction= 'up';
  }

  moveDown() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = this.velocity;
    this.ypos += this.trailSize
    this.direction= 'down';
  }

}
