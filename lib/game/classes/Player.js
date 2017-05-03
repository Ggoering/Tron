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
    context.fillRect(this.xpos, this.ypos, this.width, this.height)
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
    this.trail.push([this.xpos, this.ypos, this.width, this.height])
  }

  collision(player, context) {
    if (player.trail.includes(this.head)) {
      console.log('hit');
      // console.log(player.trail)
    }
  }

  collisionBorder(grid) {
    if (this.xpos >= grid.width + grid.x) {
      console.log("hit border")
    }
    if (this.xpos <= grid.x) {
      console.log("hit left")
    }
    if (this.ypos <= grid.y) {
      console.log("hit top")
    }
    if (this.ypos >= grid.height + grid.y) {
      console.log("hit bot")
    }
  }

}
