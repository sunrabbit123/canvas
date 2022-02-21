import { TREE_LINE_COLOR, LINE_WIDTH } from './config.js';

export class Branch{
  constructor(startX, startY, endX, endY){
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.color = TREE_LINE_COLOR;
    this.lineWidth = LINE_WIDTH;
  }
  draw(ctx) {
    ctx.beginPath();
    
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    
    ctx.stroke();
    ctx.closePath();
  }
}
