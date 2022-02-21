import { TREE_LINE_COLOR, LINE_WIDTH } from './config.js';

export class Branch{
  constructor(startX, startY, endX, endY, lineWidth){
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.color = TREE_LINE_COLOR;
    this.lineWidth = lineWidth;
  }
  draw(ctx) {
    ctx.beginPath();
    
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    
    if (this.lineWidth < 3) {
      ctx.lineWidth = 0.5;
    } else if (this.lineWidth < 7) {
      ctx.lineWidth = this.lineWidth * 0.7;
    } else if (this.lineWidth < 10) {
      ctx.lineWidth = this.lineWidth * 0.9;
    } else {
      ctx.lineWidth = this.lineWidth;
    }
    
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    
    ctx.stroke();
    ctx.closePath();
  }
}
