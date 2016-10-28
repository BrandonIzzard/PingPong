import Paddle from './Paddle';
import {p1keys, p2keys} from './keys';
import Ball from './Ball';

export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
		this.p1 = new Paddle(this.height, 5, 'blue', p1keys);
		this.p2 = new Paddle(this.height, this.width - 10, 'yellow', p2keys);
		this.ball = new Ball(this.height/2, this.width/2);
	}

	drawLine() {
		this.context.setLineDash([10, 10]);
		this.context.beginPath();
		this.context.moveTo(this.width / 2, 0);
		this.context.lineTo(this.width / 2, this.height);
		this.context.strokeStyle = "white";
		this.context.stroke();
	}
	drawBoard() {
		this.context.fillStyle = "black"
		this.context.fillRect(0, 0, this.width, this.height)
		this.drawLine()
	}

	render(){
		this.drawBoard(this.context)
		this.p1.render(this.context)
		this.p2.render(this.context)
		this.ball.render(this.context)
	}
}
