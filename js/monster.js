class Monster {
  constructor(draw, game, posx, posy) {
    // this.sound = document.getElementById('skeldeath');
    this.id = Math.floor(Math.random() * 1000000000);
    this.draw = draw;
    this.game = game;
    this.sheet = document.getElementById("skeleton");
    this.direction = "down";
    this.animx = 0;
    this.animy = 10;
    this.posx = posx * 32;
    this.posy = posy * 32;
    this.dead = false;
    this.game.addMonster(this);
  }

  attacked() {
    this.dead = true;
    let remove;
    this.game.monsters.forEach((monster, idx) => {
      if (this.id === monster.id) {
        remove = idx;
      }
    });
    this.game.monsters = this.game.monsters.slice(0, remove).concat(this.game.monsters.slice(remove + 1));
    this.game.addDead(this);
    this.animx = 0;
  }

  checkObstacle(x, y) {
    for (var i = 0; i < this.game.obstacles.length; i++) {
      if (x > this.game.obstacles[i][0] * 32 - 3 && x < this.game.obstacles[i][0] * 32 + 35 && y > this.game.obstacles[i][1] * 32 - 26 && y < this.game.obstacles[i][1] * 32 + 16) {
        return false;
      }
    }
    for (var i = 0; i < this.game.monsters.length; i++) {
      if (this.id === this.game.monsters[i].id) {
        // do nothing
      }
      else if (x > this.game.monsters[i].posx - 16 && x < this.game.monsters[i].posx + 16 && y > this.game.monsters[i].posy - 26 && y < this.game.monsters[i].posy + 16) {
        return false;
      } else if (x > this.game.player.posx - 16 && x < this.game.player.posx + 16 && y > this.game.player.posy - 26 && y < this.game.player.posy + 16) {
        return false;
      }
    }
    return true;
  }


  display() {
    let mult = 64
    if (this.dead) {
      this.animy = 20;
      this.draw.ctx.drawImage(this.sheet, mult * this.animx, mult * this.animy, mult, mult, this.posx - 32 - this.game.player.posx + 8 * 32, this.posy - 32 - this.game.player.posy + 8 * 32, mult, mult);
      if (this.animx < 5) {
        this.animx++;
      }
    } else if (this.game.player.posx > this.posx - 9 * 32 && this.game.player.posx < this.posx + 9 * 32 && this.game.player.posy > this.posy - 9 * 32 && this.game.player.posy < this.posy + 9 * 32) {
      if (Math.abs(this.game.player.posx - this.posx) > Math.abs(this.game.player.posy - this.posy)) {
        if (this.game.player.posx - this.posx < 0) {
          this.animy = 9;
          this.direction = "left";
          if (this.checkObstacle(this.posx - 4, this.posy)) {
            this.posx -= 4;
          }
        } else {
          this.animy = 11;
          this.direction = "right";
          if (this.checkObstacle(this.posx + 4, this.posy)) {
            this.posx += 4;
          }
        }
      } else {
        if (this.game.player.posy - this.posy < 0) {
          this.animy = 8;
          this.direction = "up";
          if (this.checkObstacle(this.posx, this.posy - 4)) {
            this.posy -= 4;
          }
        } else {
          this.animy = 10;
          this.direction = "down";
          if (this.checkObstacle(this.posx, this.posy + 4)) {
            this.posy += 4;
          }
        }
      }
      let animation = (this.animx === 0 ? 0 : ((this.animx - 1) % 6) + 1)
      this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, this.posx - 32 - this.game.player.posx + 8 * 32, this.posy - 32 - this.game.player.posy + 8 * 32, mult, mult);
      this.animx++;
    }
  }
}

export default Monster;
