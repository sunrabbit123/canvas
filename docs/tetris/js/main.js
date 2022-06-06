import { COLS, BLOCK_SIZE, ROWS, KEY } from "./constants.js";
import { Board } from "./board.js";
import { Piece } from "./piece.js";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

export const moves = {
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: (p) => ({ ...p, y: p.y + 1 }),
};

let board = new Board(COLS, ROWS);

function play() {
  board.reset();

  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;
}

document.getElementById("play").addEventListener("click", play);
document.addEventListener("keydown", (event) => {
  const { keyCode } = event;

  if (moves[keyCode]) {
    event.preventDefault();
    let p = moves[keyCode](board.piece);

    if (keyCode === KEY.SPACE) {
      while (board.valid(p)) {
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }
    }

    if (board.valid(p)) {
      board.piece.move(p);
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    board.piece.draw();
  }
});
