class PC {
  constructor(draw) {
    this.draw = draw;
    this.sheet = document.getElementById("player");
    this.direction = "down";
    this.animx = 0;
    this.animy = 10;
    this.key = false;
    window.addEventListener('keydown', (e) => {
      if (this.key !== 32) {
        this.key = e.keyCode;
        if (this.key === 32) {
          this.animx = 0;
        }
      }
    });
    window.addEventListener('keyup', (e) => {
      if (this.key === e.keyCode && this.key !== 32) {
        this.key = false;
        this.animx = 0;
      }
    });

  }

  display() {
    let mult = 64
    if (this.key && this.key === 37) {
      this.animy = 9;
      this.direction = "left";
    } else if (this.key && this.key === 38) {
      this.animy = 8;
      this.direction = "up";
    } else if (this.key && this.key === 39) {
      this.animy = 11;
      this.direction = "right";
    } else if (this.key && this.key == 40) {
      this.animy = 10;
      this.direction = "down";
    } else if (this.key && this.key == 32) {
      this.animy = 21;
      if (this.direction === "left") {
        this.animy = 24;
      } else if (this.direction === "down") {
        this.animy = 27;
      } else if (this.direction === "right") {
        this.animy = 30;
      }
    }
    let animation = (this.animx === 0 ? 0 : ((this.animx - 1) % 6) + 1)
    if (this.key === 32) {
      this.draw.ctx.drawImage(this.sheet, mult * this.animx * 3, mult * this.animy, mult * 3, mult * 3, 300 - mult, 300 - mult, mult * 3, mult * 3);
    } else {
      this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, 300, 300, mult, mult);
    }
    if (this.key === 32 && this.animx === 5) {
      this.key = false;
      this.animx = 0;
      if (this.direction === "left") {
        this.animy = 9;
      } else if (this.direction === "up") {
        this.animy = 8;
      } else if (this.direction === "right") {
        this.animy = 11;
      } else if (this.direction === "down") {
        this.animy = 10;
      }
    } else if (this.key) {
      this.animx++;

    }
  }
}

export default PC;
