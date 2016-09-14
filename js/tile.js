class Tile {
  constructor(x, y, type, draw) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.size = 32;
    this.draw = draw;
    this.generate();
  }

  generate() {
    if (this.type === "grass") {
      this.grass = Math.floor(Math.random() * 10)
      this.grass = this.grass === 0 ? 1 : 0
    }
  }

  display(posx, posy) {
    if (this.x * this.size > posx - 9 * this.size && this.x * this.size < posx + 8 * this.size && this.y * this.size > posy - 9 * this.size && this.y * this.size < posy + 8 * this.size) {
      if (this.type === "grass") {
        this.sheet = document.getElementById('forest')
        this.draw.ctx.drawImage(this.sheet, this.grass * this.size, 1 * this.size, this.size, this.size, this.x * this.size - posx + 8 * 32, this.y * this.size - posy + 8 * 32, this.size, this.size)
      }
    }
  }
}

export default Tile;
