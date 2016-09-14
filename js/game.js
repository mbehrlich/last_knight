
class Game {
  constructor() {
    this.obstacles = [];
    this.monsters = [];
    this.dead = [];
  }


  addObstacle(x, y) {
    this.obstacles.push([x, y]);
  }

  addMonster(monster) {
    this.monsters.push(monster);
  }

  addDead(monster) {
    this.dead.push(monster);
  }

  addPlayer(player) {
    this.player = player;
  }

}

export default Game;
