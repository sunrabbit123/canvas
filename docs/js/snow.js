import { random } from "./util.js";

export class Snow {
  constructor(ctx, width, height) {
    this.particlesOnScreen = 245;
    this.particlesArray = [];
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    setInterval(this.updateSnowFall.bind(this), 50);
    this.createSnowFlakes();
  }
  createSnowFlakes() {
    for (var i = 0; i < this.particlesOnScreen; i++) {
      this.particlesArray.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        opacity: Math.random(),
        speedX: random(-11, 11),
        speedY: random(7, 15),
        radius: random(0.5, 4.2),
      });
    }
  }
  drawSnowFlakes() {
    for (var i = 0; i < this.particlesArray.length; i++) {
      var gradient = this.ctx.createRadialGradient(
        this.particlesArray[i].x,
        this.particlesArray[i].y,
        0,
        this.particlesArray[i].x,
        this.particlesArray[i].y,
        this.particlesArray[i].radius,
      );

      gradient.addColorStop(
        0,
        "rgba(255, 255, 255," + this.particlesArray[i].opacity + ")",
      ); // white
      gradient.addColorStop(
        0.8,
        "rgba(210, 236, 242," + this.particlesArray[i].opacity + ")",
      ); // bluish
      gradient.addColorStop(
        1,
        "rgba(237, 247, 249," + this.particlesArray[i].opacity + ")",
      ); // lighter bluish

      this.ctx.beginPath();
      this.ctx.arc(
        this.particlesArray[i].x,
        this.particlesArray[i].y,
        this.particlesArray[i].radius,
        0,
        Math.PI * 2,
        false,
      );

      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    }
  }

  moveSnowFlakes() {
    for (var i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].x += this.particlesArray[i].speedX;
      this.particlesArray[i].y += this.particlesArray[i].speedY;

      if (this.particlesArray[i].y > this.height) {
        this.particlesArray[i].x = Math.random() * this.width * 1.5;
        this.particlesArray[i].y = -50;
      }
    }
  }
  updateSnowFall() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawSnowFlakes();
    this.moveSnowFlakes();
  }
}
