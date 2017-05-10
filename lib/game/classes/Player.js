export default class Player {
  constructor(xPos, yPos, color, velocity, name, id, startDirectionX, startDirectionY) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = 14;
    this.velocity = velocity;
    this.speed = {x: startDirectionX, y: startDirectionY};
    this.lives = 3;
    this.color = color;
    this.head = [this.xPos, this.yPos];
    this.trail = [];
    this.trailSize = 8;
    this.name = name;
    this.id = id;
    this.turboCount = 0;
    this.direction = {
      up: false,
      down: true,
      left: false,
      right: false
    }
    this.startingDirection()
  }

  // Draw Functions
  drawPlayer(context) {
    context.fillStyle = this.color;
    this.drawTrail(context)
    context.fillStyle = "orange";
    this.drawHead(context)
  }

  drawHead(context) {
    context.fillRect(this.xPos, this.yPos, this.trailSize, this.trailSize)
    context.fillStyle = "blue"
  }

  drawTrail(context) {
    for (let i = 0; i < this.trail.length; i++) {
      context.fillRect(this.trail[i][0], this.trail[i][1], this.trailSize, this.trailSize)
    }
  }

  moveHead() {
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

  collisions(game, player) {
    this.collisionBorder(game, player);
    this.collisionSelf(game, player);
    this.collisionPlayer(game, player);
    this.collisionFloor(game, player);
  }

  collisionPlayer(game, player) {
    let collide = false;

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

        player.victoryText(this);
        game.roundOver = true;
        collide = true;
      }
    }
    if (collide) {
      game.score[player.id] += 1;
    }
  }

  collisionSelf(game, player) {
    let collide = false;

    for (var i = 0; i < this.trail.length - (this.trailSize - this.velocity); i++) {
      if (this.trail[i][0] <= this.xPos &&
          this.trail[i][2] >= this.xPos &&
          this.trail[i][1] <= this.yPos &&
          this.trail[i][3] >= this.yPos ||

          this.trail[i][0] <= this.xPos + this.trailSize &&
          this.trail[i][2] >= this.xPos + this.trailSize &&
          this.trail[i][1] <= this.yPos &&
          this.trail[i][3] >= this.yPos ||

          this.trail[i][0] <= this.xPos  &&
          this.trail[i][2] >= this.xPos  &&
          this.trail[i][1] <= this.yPos + this.trailSize &&
          this.trail[i][3] >= this.yPos + this.trailSize ||

          this.trail[i][0] <= this.xPos + this.trailSize &&
          this.trail[i][2] >= this.xPos + this.trailSize &&
          this.trail[i][1] <= this.yPos + this.trailSize &&
          this.trail[i][3] >= this.yPos + this.trailSize) {

        this.victoryText(this)
        game.roundOver = true
        collide = true;
      }
    }
    if (collide) {
      game.score[player.id] += 1;
    }
  }

  collisionBorder(game, player) {
    if (this.xPos > game.grid.width + game.grid.x) {
      this.victoryText(this)
      game.roundOver = true;
      game.score[player.id] += 1;
    }

    if (this.xPos < game.grid.x) {
      this.victoryText(this)
      game.roundOver = true;
      game.score[player.id] += 1;
    }

    if (this.yPos < game.grid.y) {
      this.victoryText(this)
      game.roundOver = true;
      game.score[player.id] += 1;
    }

    if (this.yPos > game.grid.height + game.grid.y) {
      this.victoryText(this)
      game.roundOver = true;
      game.score[player.id] += 1;
    }
  }

  victoryText(player) {
    document.getElementById('player-winner').innerHTML = player.name + " "
    document.getElementById('game-over').style.display = "block"
  }

  // Move Direction Functions
  moveRight() {
    this.xPos += this.trailSize + 0.1
    this.speed.x = this.velocity
    this.speed.y = 0
    this.direction.right = true;
    this.direction.left = false;
    this.direction.up = false;
    this.direction.down = false;
    this.moveTrail()
  }

  moveLeft() {
    this.xPos -= this.trailSize + 0.1
    this.speed.x = -this.velocity;
    this.speed.y = 0
    this.direction.right = false;
    this.direction.left = true;
    this.direction.up = false;
    this.direction.down = false;
    this.moveTrail()
  }

  moveUp() {
    this.yPos -= this.trailSize + 0.1
    this.speed.x = 0
    this.speed.y = -this.velocity;
    this.direction.right = false;
    this.direction.left = false;
    this.direction.up = true;
    this.direction.down = false;
    this.moveTrail()
  }

  moveDown() {
    this.yPos += this.trailSize + 0.1
    this.speed.x = 0
    this.speed.y = this.velocity;
    this.direction.right = false;
    this.direction.left = false;
    this.direction.up = false;
    this.direction.down = true;
    this.moveTrail()
  }

  turbo() {
    this.velocity += 2;
    // this.turboCount++
    if (this.direction.up) {
      this.moveUp();
    }
    if (this.direction.down) {
      this.moveDown();
    }
    if (this.direction.left) {
      this.moveLeft();
    }
    if (this.direction.right) {
      this.moveRight();
    }

  }

  turboOff() {
    this.velocity -= 2;
  }

  startingDirection() {
    if (this.speed.y > 0) {
      this.direction.down = true;
      this.direction.up = false;
    }
    if (this.speed.y < 0) {
      this.direction.down = false;
      this.direction.up = true;
    }
  }

  collisionFloor(game, player) {
    let collide = false;

    // console.log(game.deadZones[1])
    for (var j = 0; j < game.deadZones.length; j++) {
      if (game.deadZones[j][0] <= this.xPos &&
          game.deadZones[j][2] + game.deadZones[j][0] >= this.xPos &&
          game.deadZones[j][1] <= this.yPos &&
          game.deadZones[j][3] + game.deadZones[j][1] >= this.yPos ||

          game.deadZones[j][0] <= this.xPos + this.trailSize &&
          game.deadZones[j][2] + game.deadZones[j][0] >= this.xPos + this.trailSize &&
          game.deadZones[j][1] <= this.yPos &&
          game.deadZones[j][3] + game.deadZones[j][1] >= this.yPos ||

          game.deadZones[j][0] <= this.xPos  &&
          game.deadZones[j][2] + game.deadZones[j][0] >= this.xPos  &&
          game.deadZones[j][1] <= this.yPos + this.trailSize &&
          game.deadZones[j][3] + game.deadZones[j][1] >= this.yPos + this.trailSize ||

          game.deadZones[j][0] <= this.xPos + this.trailSize &&
          game.deadZones[j][2] + game.deadZones[j][0] >= this.xPos + this.trailSize &&
          game.deadZones[j][1] <= this.yPos + this.trailSize &&
          game.deadZones[j][3] + game.deadZones[j][1] >= this.yPos + this.trailSize) {

        this.victoryText(this)
        game.roundOver = true
        collide = true;
      }
    }
    if (collide) {
      game.score[player.id] += 1;
    }
  }

}
