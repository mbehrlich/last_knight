class View {
  constructor(draw) {
    this.draw = draw;

  }

  display() {
    this.draw.ctx.fillStyle = "white";
    this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
  }
}

export default View;
