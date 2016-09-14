import PC from './player_character';
import View from './view';
import Game from './game';


class LevelOne {
  constructor(draw) {
    this.draw = draw;
    this.level = true;
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
    }, 50);
  }
}

export default LevelOne;
