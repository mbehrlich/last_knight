class HealthBar {
  constructor(draw) {
    this.draw = draw
  }

  display(health) {
    this.draw.ctx.beginPath();
    this.draw.ctx.fillStyle = "red";
    if (health < 1) {
      this.draw.ctx.fillStyle = "black";
    }
    this.draw.ctx.arc(30, 30, 10, 0, 2 * Math.PI);
    this.draw.ctx.fill();
    this.draw.ctx.beginPath();
    this.draw.ctx.fillStyle = "red";
    if (health < 2) {
      this.draw.ctx.fillStyle = "black";
    }
    this.draw.ctx.arc(70, 30, 10, 0, 2 * Math.PI);
    this.draw.ctx.fill();
    this.draw.ctx.beginPath();
    this.draw.ctx.fillStyle = "red";
    if (health < 3) {
      this.draw.ctx.fillStyle = "black";
    }
    this.draw.ctx.arc(110, 30, 10, 0, 2 * Math.PI);
    this.draw.ctx.fill();
  }

}

export default HealthBar;
