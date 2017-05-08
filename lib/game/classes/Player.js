export default class Player {
  constructor(xPos, yPos, color, velocity, name, id) {
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
    this.name = name;
    this.id = id;
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
  // collision(grid, player, context, game) {
  //   this.collisionBorder(grid, game, player);
  //   for (var i = 0; i < player.trail.length - (player.trailSize - player.velocity); i++) {
  //     if (player.trail[i][0] <= this.xPos &&
  //         player.trail[i][2] >= this.xPos &&
  //         player.trail[i][1] <= this.yPos &&
  //         player.trail[i][3] >= this.yPos ||
  //
  //         player.trail[i][0] <= this.xPos + this.trailSize &&
  //         player.trail[i][2] >= this.xPos + this.trailSize &&
  //         player.trail[i][1] <= this.yPos &&
  //         player.trail[i][3] >= this.yPos ||
  //
  //         player.trail[i][0] <= this.xPos  &&
  //         player.trail[i][2] >= this.xPos  &&
  //         player.trail[i][1] <= this.yPos + this.trailSize &&
  //         player.trail[i][3] >= this.yPos + this.trailSize ||
  //
  //         player.trail[i][0] <= this.xPos + this.trailSize &&
  //         player.trail[i][2] >= this.xPos + this.trailSize &&
  //         player.trail[i][1] <= this.yPos + this.trailSize &&
  //         player.trail[i][3] >= this.yPos + this.trailSize){
  //       player.victoryText(player)
  //       game.roundOver = true
  //     }
  //   }
  // }

  collisions(game, player) {
    this.collisionBorder(game, this);
    this.collisionPlayer(game, this);
    this.collisionPlayer(game, player);
  }

  collisionPlayer(game, player) {
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
          player.trail[i][3] >= this.yPos + this.trailSize) {

          player.victoryText(this)
          game.roundOver = true
      }
    }
    if (game.roundOver) {
      game.score[player.id] += 1;
    }
  }

  collisionBorder(game, player) {
    if (this.xPos > game.grid.width + game.grid.x) {
      player.victoryText(player)
      game.roundOver = true;
    }

    if (this.xPos < game.grid.x) {
      player.victoryText(player)
      game.roundOver = true;
    }

    if (this.yPos < game.grid.y) {
      player.victoryText(player)
      game.roundOver = true;
    }

    if (this.yPos > game.grid.height + game.grid.y) {
      player.victoryText(player)
      game.roundOver = true;
    }

    if (game.roundOver) {
      game.score[player.id] += 1;
    }
  }

  victoryText(player) {
    document.getElementById('player-winner').innerHTML = player.name + " "
    document.getElementById('game-over').style.display = "block"
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
