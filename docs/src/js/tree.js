import { Branch } from './branch.js';
import { TREE_LENGTH, TREE_DEPTH } from './config.js';

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = []; // 가지들을 담을 공간
    this.depth = TREE_DEPTH;
    this.init();
  }

  init() {
    this.createBranch(this.posX, this.posY, -90, 0);
    this.draw(this.ctx);
  }

  createBranch(startX, startY, angle, depth) {
    if (depth === this.depth) return;
    
    const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);
    const depthConverse = this.depth - depth;
    
    const endX = startX + this.cos(angle) * len * depthConverse;
    const endY = startY + this.sin(angle) * len * depthConverse;
    const nextDepth = depth + 1;
    this.branches.push(new Branch(startX, startY, endX, endY, depthConverse));
    
    this.createBranch(endX, endY, angle - this.random(15, 23), nextDepth);
    this.createBranch(endX, endY, angle + this.random(15, 23), nextDepth);
  }

  draw(ctx) {
    this.branches.map((branch) => {
      branch.draw(ctx);
    });
  }
  
  cos(angle){ return Math.cos(this.degToRad(angle)); }
  sin(angle){ return Math.sin(this.degToRad(angle)); }
  degToRad(angle){ return (angle / 180.0) * Math.PI; }
  random(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
}
