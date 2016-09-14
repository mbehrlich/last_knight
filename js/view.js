import Tile from './tile';
import GameObject from './object';

class View {

  constructor(draw, game) {
    this.draw = draw;
    this.game = game;
    this.generate();
  }

  generate() {
    this.tiles = []
    for (var i = 0; i < 64; i++) {
      for (var j = 0; j < 64; j++) {
        this.tiles.push(new Tile(i, j, "grass", this.draw));
      }
    }
    for (var i = 0; i < 64; i++) {
      this.tiles.push(new GameObject(i, 63, "tree-north", this.draw, this.game));
      this.tiles.push(new GameObject(i, 0, "tree-south", this.draw, this.game));
      this.tiles.push(new GameObject(i, -1, "tree-middle", this.draw, this.game));
      // this.tiles.push(new GameObject(i, 1, `tree-trunk${i % 3}`, this.draw, this.game));
      this.tiles.push(new GameObject(0, i, "tree-east", this.draw, this.game));
      this.tiles.push(new GameObject(63, i, "tree-west", this.draw, this.game));
    }

    for (var i = 0; i < 75; i++) {
      let i = Math.floor(Math.random() * 64);
      let j = Math.floor(Math.random() * 64);
      let open = true;
      this.game.obstacles.forEach((spot) => {
        if (spot[0] >= i - 1 && spot[0] <= i + 4 && spot[1] >= j - 1 && spot[1] <= j + 4) {
          open = false;
        }
      });
      if (32 >= i - 2 && 32 <= i + 5 && 32 >= j - 2 && 32 <= j + 5) {
        open = false;
      }
      if (open) {
        this.placeTree(i, j);
      }
    }
    for (var i = 0; i < 25; i++) {
      let i = Math.floor(Math.random() * 64);
      let j = Math.floor(Math.random() * 64);
      let open = true;
      this.game.obstacles.forEach((spot) => {
        if (spot[0] >= i - 1 && spot[0] <= i + 4 && spot[1] >= j - 1 && spot[1] <= j + 4) {
          open = false;
        }
      });
      if (32 >= i - 2 && 32 <= i + 5 && 32 >= j - 2 && 32 <= j + 5) {
        open = false;
      }
      if (open) {
        this.placeLake(i, j);
      }
    }
  }

  placeLake(i, j) {
    this.tiles.push(new GameObject(i, j, "water-northwest", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j, "water-north", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j, "water-northeast", this.draw, this.game));
    this.tiles.push(new GameObject(i, j+1, "water-west", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j+1, "water-middle", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j+1, "water-east", this.draw, this.game));
    this.tiles.push(new GameObject(i, j+2, "water-southwest", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j+2, "water-south", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j+2, "water-southeast", this.draw, this.game));
  }

  placeTree(i, j) {
    this.tiles.push(new GameObject(i, j, "tree-northwest", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j, "tree-north", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j, "tree-northeast", this.draw, this.game));
    this.tiles.push(new GameObject(i, j+1, "tree-west", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j+1, "tree-middle", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j+1, "tree-east", this.draw, this.game));
    this.tiles.push(new GameObject(i, j+2, "tree-southwest", this.draw, this.game));
    this.tiles.push(new GameObject(i+1, j+2, "tree-south", this.draw, this.game));
    this.tiles.push(new GameObject(i+2, j+2, "tree-southeast", this.draw, this.game));
  }

  display(posx, posy) {

    this.draw.ctx.fillStyle = "#2E203C";
    this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
    this.tiles.forEach((tile) => tile.display(posx, posy));
  }

}

export default View;
