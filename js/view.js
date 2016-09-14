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
    this.tiles.push(new GameObject(34, 35, "water-northwest", this.draw, this.game));
    this.tiles.push(new GameObject(35, 35, "water-north", this.draw, this.game));
    this.tiles.push(new GameObject(36, 35, "water-northeast", this.draw, this.game));
    this.tiles.push(new GameObject(34, 36, "water-west", this.draw, this.game));
    this.tiles.push(new GameObject(35, 36, "water-middle", this.draw, this.game));
    this.tiles.push(new GameObject(36, 36, "water-east", this.draw, this.game));
    this.tiles.push(new GameObject(34, 37, "water-southwest", this.draw, this.game));
    this.tiles.push(new GameObject(35, 37, "water-south", this.draw, this.game));
    this.tiles.push(new GameObject(36, 37, "water-southeast", this.draw, this.game));

  }

  display(posx, posy) {

    this.draw.ctx.fillStyle = "#2E203C";
    this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
    this.tiles.forEach((tile) => tile.display(posx, posy));
  }

}

export default View;
