export default class Player {

  constructor(xpos, ypos, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.height = 10;
    this.width = 10;
    this.velocity = 5;
    this.speedx = this.velocity;
    this.speedy = 0
    this.lives = 3
    this.color = color;
    this.head = [this.xpos, this.ypos];
    this.trail = [];
    this.vertical = false;
    this.headOffset = 20;
    this.trailSize = 3 + this.velocity;
  }

  drawHead(context, img) {
  context.drawImage(img, img.xpos, img.ypos);
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
    const dy = this.ypos + this.height/2;
    const dx = this.xpos + this.width/2;
    this.trail.push([dx, dy, this.trailSize, this.trailSize])
  }

  collision(player, context, game) {
    // if (player.trail.includes(this.head)) {
    //   console.log('hit');
      // game.roundOver = true;
    // }
  }

  collisionSelf() {
    // console.log(this.head, this. trail);
    // console.log(this.);
  }


// BUG: legendary position is recroding after
  collisionBorder(grid, game) {
    if (this.xpos > grid.width + grid.x - this.headOffset - this.width) {
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
    if (this.ypos > grid.height + grid.y - this.headOffset - this.height) {
      console.log("hit bot")
      game.roundOver = true;
    }
  }

  moveRight() {
    this.ypos -= this.speedy
    this.speedx = this.velocity
    this.speedy = 0
    this.xpos += this.trailSize
    this.vertical = false;
  }

  moveLeft() {
    this.ypos -= this.speedy
    this.speedx = -this.velocity;
    this.speedy = 0
    this.xpos -= this.trailSize
    this.vertical = false;
  }

  moveUp() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = -this.velocity;
    this.ypos -= this.trailSize
    this.vertical = true;
  }

  moveDown() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = this.velocity;
    this.ypos += this.trailSize
    this.vertical = true;
  }

}
