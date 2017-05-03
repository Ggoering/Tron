export default class Player {

  constructor(xpos, ypos, width, height, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.height = height;
    this.width = width;
    this.speedx = 1
    this.speedy = 0
    this.lives = 3
    this.color = color;
    this.head = [this.xpos, this.ypos];
    this.trail = [];
  }

  drawHead(context) {
    const img = new Image();
    // img.src = './lib/game/assets/bike.png';
    // img.onload = function() {
    //   context.drawImage(img, this.xpos, this.ypos, this.width, this.height);
    // }
    // img.src = './lib/game/assets/bike.png';
    context.fillRect(this.xpos, this.ypos, this.width, this.height)
  }

  clearHead(context) {
    context.clearRect(this.xpos, this.ypos, this.width, this.height)
  }

  drawTrail(context) {
    for (let i = 0; i < this.trail.length; i++){
    context.fillRect(...this.trail[i])
    }
  }

  drawBike(context) {
    context.fillStyle = "orange"
    this.drawTrail(context)
    context.fillStyle = this.color
    this.drawHead(context)
  }

  moveHead() {
    this.xpos += this.speedx;
    this.ypos += this.speedy;
    this.head = `${this.xpos}, ${this.ypos}`;
  }

  moveTrail() {
    this.trail.push([this.xpos, this.ypos, 1, 1])
  }

  collision(player, context, game) {
    if (player.trail.includes(this.head)) {
      console.log('hit');
      game.roundOver = true;
      // console.log(player.trail)
    }
  }

  // changeHorizontalDirection() {
  //   this.xpos -= this.speedx;
  //   this.speedx = 0;
  //   this.speedy = 1;
  //   this.ypos += this.width;
  // }
  //
  // changeVerticalDirection() {
  //   this.xpos -= this.speedx;
  //   this.speedx = 0;
  //   this.speedy = 1;
  //   this.ypos += this.width;
  // }

// BUG: legendary position is recroding after
  collisionBorder(grid, player, game) {
    if (this.xpos > grid.width + grid.x) {
      console.log("hit border");
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
    if (this.ypos > grid.height + grid.y) {
      console.log("hit bot")
      game.roundOver = true;
    }
  }

  moveRight() {
    this.ypos -= this.speedy
    this.speedx = 1
    this.speedy = 0
    this.xpos += this.height
  }

  moveLeft() {
    this.ypos -= this.speedy
    this.speedx = -1;
    this.speedy = 0
    this.xpos -= this.height
  }

  moveUp() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = -1;
    this.ypos -= this.width
  }

  moveDown() {
    this.xpos -= this.speedx
    this.speedx = 0
    this.speedy = 1;
    this.ypos += this.width
  }

}
