var canvas = document.getElementById('game')
var context = canvas.getContext('2d');
var Block = require('./Block.js');
var blocks = [];
var numBlocks = 300;
var moveBlocks = false;

for (var i = 0; i < numBlocks; i++) {
  blocks[i] = new Block(i * 10, 10 + i, 4, 4)
}


context.fillStyle = "rgba(0, 255, 0, 1)";
var x = 50;
var y = 50;

var vx = 2

context.fillRect(x, y, 10, 10);

requestAnimationFrame(function gameloop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < blocks.length; i++) {
    let b = blocks[i]
    b.draw(context)

    if (moveBlocks) {
      b.move()
    }

  }
  requestAnimationFrame(gameloop)
});
canvas.addEventListener('click', function(event) {
  moveBlocks = !moveBlocks
  var newBlock = new Block(event.offsetX, event.offsetY, 5, 5)
  blocks.push(newBlock)
})
