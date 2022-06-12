import { random } from "./util.js";
import { PARTICLE_ON_SCREEN } from "./config.js";

export class Snow {
  constructor(ctx, width, height, isDay) {
    this.particlesArray = [];
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.isDay = isDay;
    console.log(isDay);
    setInterval(this.updateSnowFall.bind(this), 50);
    this.createSnowFlakes();
  }
  createSnowFlakes() {
    for (var i = 0; i < PARTICLE_ON_SCREEN; i++) {
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
    this.particlesArray.map((particle) => {
      var gradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius,
      );

      if (this.isDay) {
        gradient.addColorStop(0, `rgba(0, 0, 0, ${particle.opacity})`);
      } else {
        gradient.addColorStop(
          0,
          "rgba(255, 255, 255," + particle.opacity + ")",
        ); // white
        gradient.addColorStop(
          0.8,
          "rgba(210, 236, 242," + particle.opacity + ")",
        ); // bluish
        gradient.addColorStop(
          1,
          "rgba(237, 247, 249," + particle.opacity + ")",
        ); // lighter bluish
      }
      this.ctx.beginPath();
      this.ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2,
        false,
      );

      this.ctx.fillStyle = gradient;
      this.ctx.fill();
    });
  }

  moveSnowFlakes() {
    this.particlesArray = this.particlesArray.map((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.y > this.height) {
        particle.x = Math.random() * this.width * 1.5;
        particle.y = -50;
      }

      return particle;
    });
  }
  updateSnowFall() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawSnowFlakes();
    this.moveSnowFlakes();
  }
}
