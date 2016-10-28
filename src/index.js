import './game.css';
import Game from './Game'



var game = new Game();

console.log("If you can dodge a wrench, you can dodge a pong");

const ms = 30;

(function gameLoop() {
	// console.log(game.height, game.width)
	// console.log(this.p1, this.p2);
	game.render();
	setTimeout(gameLoop, ms);
}());
