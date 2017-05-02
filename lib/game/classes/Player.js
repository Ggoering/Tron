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
    this.direction = {
      vertical: Boolean(this.speedy),
      horizontal: Boolean(this.speedx)
    }
  }

  draw(context) {
    context.fillRect(this.xpos, this.ypos, this.width, this.height)
    context.fillStyle = this.color
  }

  move() {
    this.xpos += this.speedx
    this.ypos += this.speedy
  }
}
