
const size = 5;

export default class Ball {
	constructor() {
      this.x = 150; // random x
      this.y = 75; 
      this.vy = Math.floor(Math.random() * 12 - 6); // randomize direction, not straight up
      this.vx = (6 - Math.abs(this.vy)); // x direction
      this.size = size;
      this.radius = 5;
  }

  draw(context) {
  	context.fillStyle = '';
  	context.beginPath();
  	context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  	context.fill();
  	context.closePath();
  }


  paddleCollision(player1, player2) {
  	if (this.vx > 0) {
  		const inRightEnd = this.x >= player2.x - this.radius;
  		if (inRightEnd) {
  			if (this.y >= player2.y  && this.y <= (player2.y + player2.height)) {
  				this.vx *= -1;
  				let snd = new Audio("./sounds/pong-03.wav")
  				snd.play()

  			}
  		}
  	} else {

  		const inLeftEnd = this.x <= player1.x + (this.radius*2);
  		if (inLeftEnd) {
  			if (this.y >= player1.y && this.y <= (player1.y + player1.height)) {
  				this.vx *= -1;
  				let snd = new Audio("./sounds/pong-03.wav")
  				snd.play()
  			}
  		}
  	}
  }



  bounce() {
  	if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
  		this.vy *= -1
  		let snd = new Audio("./sounds/pong-02.wav")
  		snd.play()
  	}}

  	ballReset(){
  		this.x = 150
  		this.y = Math.floor(Math.random() * 50 ) + 25;
  		this.vy = Math.floor(Math.random() * 12 - 6);
  		this.vx *= -1
  		let snd = new Audio("./sounds/pong-01.wav")
  		snd.play()
  	}
  	

  	score(p1Score, p2Score) {
  		if (this.x <= 0 + this.radius) {
  			this.ballReset();
  			p1Score.score++;
  		} else if (this.x >= 300) {
  			this.ballReset();
  			p2Score.score++;
  		}
  	}

  	render(context, player1, player2, p1Score, p2Score) {
  		this.x += this.vx;
  		this.y += this.vy;
  		this.paddleCollision(player1, player2);
  		this.bounce();
  		this.score(p1Score, p2Score);
  		this.draw(context);

  	}
  }