export default class Grid {

  constructor(width, height, canvas, color) {
    this.width = width
    this.height = height
    this.color = color
    this.canvas = canvas
    this.xpos = (this.canvas.width - this.width) / 2
    this.ypos = (this.canvas.height - this.height) / 2
  }

  draw(context, canvas) {
    var img = new Image()
    img.src = './lib/game/assets/bg-grid.jpg'
    img.onload = function() {
      context.drawImage(img, 0, 0)
      context.drawImage(img, 0, 480)
    }
    // context.fillRect(this.xpos, this.ypos, this.width, this.height)
  }
}
