class MonsterBar {
  constructor(draw) {
    this.draw = draw;
  }

  display(monsters) {
    this.draw.ctx.font = "18px 'Cinzel'";
    this.draw.ctx.fillStyle = "black";
    this.draw.ctx.fillText(`${monsters} monsters left`, 250, 30);
  }
}

export default MonsterBar;
