import LevelOne from './level_one';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let draw = {};
  draw.width = 600;
  draw.height = 600;
  draw.ctx = canvas.getContext("2d");
  let levelOne = new LevelOne(draw);
  levelOne.start();

});
