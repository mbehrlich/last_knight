import Intro from './intro';
import LevelOne from './level_one';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let draw = {};
  draw.width = 512;
  draw.height = 512;
  draw.ctx = canvas.getContext("2d");
  let intro = new Intro(draw);
  let nextLevel = (draw) => {
    let levelOne = new LevelOne(draw);
    levelOne.start();
  };
  intro.start(nextLevel);

  let mute = document.getElementById('mute');
  let currentMute = false;
  mute.addEventListener("click", () => {
    let music = document.getElementById('firstblood');
    let sound1 = document.getElementById('sword');
    // let sound2 = document.getElementById('monster');
    if (currentMute) {
      music.muted = false;
      sound1.muted = false;
      // sound2.setAttribute("muted", "false");
      currentMute = false;
    } else {
      music.muted = true;
      sound1.muted = true;
      // sound2.setAttribute("muted", "false");
      currentMute = true;
    }
  })
});
