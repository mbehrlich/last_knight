class GameObject {
  constructor(x, y, type, draw, game) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.size = 32;
    this.draw = draw;
    this.game = game;
    this.sheet = document.getElementById('forest');
    this.generate();
    if (this.type === "water-south" || this.type === "water-southwest" || this.type === "water-southeast") {
      // this.game.addObastacle(this.x, this.y - 0.5)
    } else {
      this.game.addObstacle(this.x, this.y);
    }
  }

  generate() {
    if (this.type === "tree-north") {
      this.sheet = document.getElementById('forest');
      this.animx = 3;
      this.animy = 3;
    } else if (this.type === "tree-south") {
      this.sheet = document.getElementById('forest');
      this.animx = 3;
      this.animy = 5;
    } else if (this.type === "tree-east") {
      this.sheet = document.getElementById('forest');
      this.animx = 4;
      this.animy = 4;
    } else if (this.type === "tree-west") {
      this.sheet = document.getElementById('forest');
      this.animx = 2;
      this.animy = 4;
    } else if (this.type === "tree-northeast") {
      this.sheet = document.getElementById('forest');
      this.animx = 4;
      this.animy = 5;
    } else if (this.type === "tree-northwest") {
      this.sheet = document.getElementById('forest');
      this.animx = 2;
      this.animy = 5;
    } else if (this.type === "tree-southeast") {
      this.sheet = document.getElementById('forest');
      this.animx = 4;
      this.animy = 4;
    } else if (this.type === "tree-southwest") {
      this.sheet = document.getElementById('forest');
      this.animx = 2;
      this.animy = 4;
    } else if (this.type === "tree-middle") {
      this.sheet = document.getElementById('forest');
      this.animx = 2;
      this.animy = 4;
    } else if (this.type === "tree-middle") {
      this.sheet = document.getElementById('forest');
      this.animx = 3;
      this.animy = 4;
    } else if (this.type === "water-north") {
      this.sheet = document.getElementById('water');
      this.animx = 6;
      this.animy = 3;
    } else if (this.type === "water-northwest") {
      this.sheet = document.getElementById('water');
      this.animx = 5;
      this.animy = 3;
    } else if (this.type === "water-northeast") {
      this.sheet = document.getElementById('water');
      this.animx = 7;
      this.animy = 3;
    } else if (this.type === "water-southeast") {
      this.sheet = document.getElementById('water');
      this.animx = 7;
      this.animy = 5;
    } else if (this.type === "water-west") {
      this.sheet = document.getElementById('water');
      this.animx = 5;
      this.animy = 4;
    } else if (this.type === "water-middle") {
      this.sheet = document.getElementById('water');
      this.animx = 6;
      this.animy = 4;
    } else if (this.type === "water-east") {
      this.sheet = document.getElementById('water');
      this.animx = 7;
      this.animy = 4;
    } else if (this.type === "water-southwest") {
      this.sheet = document.getElementById('water');
      this.animx = 5;
      this.animy = 5;
    } else if (this.type === "water-south") {
      this.sheet = document.getElementById('water');
      this.animx = 6;
      this.animy = 5;
    }
  }

  display(posx, posy) {
    if (this.x * this.size > posx - 9 * this.size && this.x * this.size < posx + 8 * this.size && this.y * this.size > posy - 9 * this.size && this.y * this.size < posy + 8 * this.size) {
      this.draw.ctx.drawImage(this.sheet, this.animx * this.size, this.animy * this.size, this.size, this.size, this.x * this.size - posx + 8 * 32, this.y * this.size - posy + 8 * 32, this.size, this.size)
    }
  }
}

export default GameObject;
