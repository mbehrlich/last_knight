import PC from './player_character';
import View from './view';
import Game from './game';


class LevelOne {
  constructor(draw) {
    this.draw = draw;
    this.level = true;
    this.gameOver = false;
    this.game = new Game();
    this.player = new PC(this.draw, this.game);
    this.game.addPlayer(this.player);
    this.view = new View(this.draw, this.game);
  }

  start() {

    window.setInterval(() => {
      this.draw.ctx.clearRect(0, 0, this.draw.width, this.draw.height);
      this.view.display(this.player.posx, this.player.posy);
      this.player.display();
      if (this.player.health < 1) {
        this.restart("Game Over");
      } else if (this.game.monsters.length == 0) {
        this.restart("You win!");
      }

    }, 50);
  }

  restart(msg) {
    this.draw.ctx.font = "44px 'Cinzel'";
    this.draw.ctx.fillStyle = "white";
    this.draw.ctx.fillText(msg, 100, 110);
    this.draw.ctx.font = "36px 'Cinzel'";
    this.draw.ctx.fillText("Press Space", 100, 150);
    if (!this.gameOver) {
      this.gameOver = true;
      window.setTimeout(() => {
        window.addEventListener('keydown', (e) => {
          e.preventDefault();
          if (e.keyCode === 32 && this.gameOver == true) {
            this.gameOver = false;
            this.game = new Game();
            this.player = new PC(this.draw, this.game);
            this.game.addPlayer(this.player);
            this.view = new View(this.draw, this.game);
          }
        });
      }, 2000);
    }
  }

}



export default LevelOne;
