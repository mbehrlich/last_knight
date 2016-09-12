import PC from './player_character';
import View from './view';


class LevelOne {
  constructor(draw) {
    this.draw = draw;
    this.player = new PC(this.draw);
    this.level = true;
    this.view = new View(this.draw);

  }

  start() {

    window.setInterval(() => {
      this.draw.ctx.clearRect(0, 0, this.draw.width, this.draw.height);
      this.view.display();
      this.player.display();
    }, 50);
  }
}

export default LevelOne;
