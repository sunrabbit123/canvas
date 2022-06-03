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

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y))
        );
      });
    });
  }
  isInsideWalls(x, y) {
    return x >= 0 && x < this.COLS && y <= this.ROWS;
  }
  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }
}

export { Board };
