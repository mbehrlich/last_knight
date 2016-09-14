class PC {
  constructor(draw, game) {
    this.draw = draw;
    this.game = game;
    this.sheet = document.getElementById("player");
    this.direction = "down";
    this.animx = 0;
    this.animy = 10;
    this.key = false;
    this.posx = 32 * 32;
    this.posy = 32 * 32;
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (this.key !== 32) {
        this.key = e.keyCode;
        if (this.key === 32) {
          this.animx = 0;
        }
      }
    });
    window.addEventListener('keyup', (e) => {
      if (this.key === e.keyCode && this.key !== 32) {
        this.key = false;
        this.animx = 0;
      }
    });
  }

  checkObstacle(x, y) {
    for (var i = 0; i < this.game.obstacles.length; i++) {
      if (x > this.game.obstacles[i][0] * 32 - 1 && x < this.game.obstacles[i][0] * 32 + 32 && y > this.game.obstacles[i][1] * 32 - 17 && y < this.game.obstacles[i][1] * 32 + 16) {
        return false;
      }
    }
    return true;
  }


  display() {
    let mult = 64
    if (this.key && this.key === 37) {
      this.animy = 9;
      this.direction = "left";
      if (this.checkObstacle(this.posx - 5, this.posy)) {
        this.posx -= 5;
      }
    } else if (this.key && this.key === 38) {
      this.animy = 8;
      this.direction = "up";
      if (this.checkObstacle(this.posx, this.posy - 5)) {
        this.posy -= 5;
      }
    } else if (this.key && this.key === 39) {
      this.animy = 11;
      this.direction = "right";
      if (this.checkObstacle(this.posx + 5, this.posy)) {
        this.posx += 5;
      }
    } else if (this.key && this.key == 40) {
      this.animy = 10;
      this.direction = "down";
      if (this.checkObstacle(this.posx, this.posy + 5)) {
        this.posy += 5;
      }
    } else if (this.key && this.key == 32) {
      this.animy = 21;
      if (this.direction === "left") {
        this.animy = 24;
      } else if (this.direction === "down") {
        this.animy = 27;
      } else if (this.direction === "right") {
        this.animy = 30;
      }
    }
    let animation = (this.animx === 0 ? 0 : ((this.animx - 1) % 6) + 1)
    if (this.key === 32) {
      this.draw.ctx.drawImage(this.sheet, mult * this.animx * 3, mult * this.animy, mult * 3, mult * 3, this.draw.width / 2 - mult * 1.5, this.draw.height / 2 - mult * 1.5, mult * 3, mult * 3);
    } else {
      this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, this.draw.width / 2 - mult / 2, this.draw.height / 2 - mult / 2, mult, mult);
    }
    if (this.key === 32 && this.animx === 5) {
      this.key = false;
      this.animx = 0;
      if (this.direction === "left") {
        this.animy = 9;
      } else if (this.direction === "up") {
        this.animy = 8;
      } else if (this.direction === "right") {
        this.animy = 11;
      } else if (this.direction === "down") {
        this.animy = 10;
      }
    } else if (this.key) {
      this.animx++;

    }
  }
}

export default PC;
