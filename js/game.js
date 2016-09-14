class Game {
  constructor() {
    this.obstacles = [];
  }

  addObstacle(x, y) {
    this.obstacles.push([x, y]);
  }
}

export default Game;
