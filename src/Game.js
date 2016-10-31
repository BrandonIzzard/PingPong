import Paddle from './Paddle';
import {p1keys, p2keys} from './keys';
import Ball from './Ball';
import ScoreBoard from './ScoreBoard';


export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
		this.player1 = new Paddle(this.height, 5, 'blue', p1keys);
		this.player2 = new Paddle(this.height, this.width - 10, 'red', p2keys)
		this.p1Score = new ScoreBoard(180, 25);
		this.p2Score = new ScoreBoard(100, 25);
		this.ball = new Ball(this.height/2, this.width/2);
		this.ball1 = new Ball(this.height/2, this.width/2);
	}

	drawLine() {
		this.context.setLineDash([3, 3]);
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
		this.player1.render(this.context)
		this.player2.render(this.context)
		this.p1Score.render(this.context)
		this.p2Score.render(this.context)
		this.ball.render(this.context, this.player1, this.player2, this.p1Score, this.p2Score)
	}
}
