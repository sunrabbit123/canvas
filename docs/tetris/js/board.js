class Board {
  constructor(COLS, ROWS) {
    this.COLS = COLS;
    this.ROWS = ROWS;
  }
  grid;

  reset() {
    this.grid = this.getEmptyBoard();
  }

  getEmptyBoard() {
    return Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(0));
  }
}

export { Board };
