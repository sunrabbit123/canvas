import { Branch } from './branch.js';

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
    // 가지 생성
  }

  draw(ctx) {
    // 가지들을 캔버스에 draw
  }
}
