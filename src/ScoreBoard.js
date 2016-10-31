

export default class ScoreBoard {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.score = 0;
	}
	draw(context) {
		context.font = "24px Times New Roman";
		context.fillStyle = "white";
		context.fillText(this.score, this.x, this.y);
	}

	render(context){
		this.draw(context);
	}
}