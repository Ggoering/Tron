export default class Grid {
  constructor(specs) {
    this.width = specs.width;
    this.height = specs.height;
    this.canvas = specs.canvas;
    this.lines = specs.lines;
    this.lineColor = '#8CE7FB';
    this.x = (this.canvas.width - this.width) / 2;
    this.y = (this.canvas.height - this.height) / 2;
  }

  draw(ctx) {
    ctx.fillStyle = '#0D0C1C';
    ctx.fillRect(this.x, this.y, this.width, this.height)
    this.drawHLines(ctx);
    this.drawVLines(ctx)
  }

  drawHLines(ctx) {
    ctx.fillStyle = this.lineColor;
    for (let i = 0; i < this.lines; i++) {
      ctx.fillRect(this.x, this.y + i * this.height / this.lines, this.width, 1);
    }
    ctx.fillRect(this.x, this.y + this.height, this.width, 1);
  }

  drawVLines(ctx) {
    ctx.fillStyle = this.lineColor;
    for (let i = 0; i < this.lines; i++) {
      ctx.fillRect(this.x + i * this.width / this.lines, this.y, 1, this.height);
    }
    ctx.fillRect(this.x + this.width, this.y, 1, this.height);
  }
}
