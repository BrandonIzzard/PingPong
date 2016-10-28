
const size = 5;

export default class Ball {
	constructor() {
      this.x = 150; // random x
      this.y = 80; // random y
      this.vy = Math.floor(Math.random() * 12 - 6); // randomize direction, not straight up
      this.vx = (7 - Math.abs(this.vy)); // x direction
      this.size = size;
      this.radius = 5;
  }
  draw(context) {
  	context.fillStyle = 'magenta';
  	context.beginPath();
  	context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  	context.fill();
  	context.closePath();
  }

 bounce() {
 	if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
 		this.vy *= -1
 	}
 	if (this.x <= 0 + this.radius || this.x >= 300 - this.radius) {
 		this.x = 150;
 		this.y = 75;
 	}
 }

  render(context) {
  	this.x += this.vx;
  	this.y += this.vy;
  	this.draw(context);
  	this.bounce();
  }
}