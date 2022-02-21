import { Branch } from './branch.js';
import { TREE_LENGTH } from './config.js';

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = []; // 가지들을 담을 공간

    this.init();
  }

  init() {
    this.createBranch(this.posX, this.posY);
    this.draw(this.ctx);
  }

  createBranch(startX, startY) {
    this.branches.push(new Branch(startX, startY, startX, startY - TREE_LENGTH)); 
  }

  draw(ctx) {
    this.branches.map((branch) => {
      branch.draw(ctx);
    });
  }
}
