class Particle {
  constructor(x, y) {
    this.size = 10;
    this.x = x;
    this.y = y;
  }



}

export default Particle;


// //Random Circles creator
// function create() {
//
// 	//Place the circles at the center
//
// 	this.x = W/2;
// 	this.y = H/2;
//
//
// 	//Random radius between 2 and 6
// 	this.radius = 2 + Math.random()*3;
//
// 	//Random velocities
// 	this.vx = -5 + Math.random()*10;
// 	this.vy = -5 + Math.random()*10;
//
// 	//Random colors
// 	this.r = Math.round(Math.random())*255;
// 	this.g = Math.round(Math.random())*255;
// 	this.b = Math.round(Math.random())*255;
// }
//
// for (var i = 0; i < 500; i++) {
// 	circles.push(new create());
// }
//
// function draw() {
//
//
//
// 	//Fill the canvas with circles
// 	for(var j = 0; j < circles.length; j++){
// 		var c = circles[j];
//
// 		//Create the circles
// 		ctx.beginPath();
// 		ctx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
//         ctx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
// 		ctx.fill();
//
// 		c.x += c.vx;
// 		c.y += c.vy;
// 		c.radius -= .02;
//
// 		if(c.radius < 0)
// 			circles[j] = new create();
// 	}
// }
//
// function animate() {
// 	requestAnimFrame(animate);
// 	draw();
// }
//
// animate();