let newLevel;
let newDraw;
let startLevel;
let sound;

class Intro {
  constructor(draw) {
    this.draw = draw;
    newDraw = draw;
    startLevel = this.startLevel;
  }

  start(nextLevel) {
    newLevel = nextLevel;
    sound = document.getElementById('firstblood');
    // sound.setAttribute("muted", "true");
    sound.play();
    this.draw.ctx.fillStyle = "black";
    this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
    this.draw.ctx.stroke
    this.draw.ctx.font = "44px 'Cinzel'";
    this.draw.ctx.fillStyle = "white";
    this.draw.ctx.fillText("The Last Knight", 110,60);
    this.draw.ctx.font = "30px 'Cinzel'";
    this.draw.ctx.fillText("of the Last Kingdom", 130, 100);
    this.draw.ctx.fillText("Press Space", 190, 450);
    window.addEventListener('keydown', startLevel);
  }

  startLevel(e) {
    e.preventDefault();
    if (e.keyCode === 32) {
      newLevel(newDraw);
      sound.pause();
      window.removeEventListener('keydown', startLevel);
    }
  }

}



export default Intro;
