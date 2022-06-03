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
  [KEY.UP]: (p) => ({ ...p, y: p.y + 1 }),
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
    // 이벤트 버블링을 막는다.
    event.preventDefault();

    // 조각의 새 상태를 얻는다.
    let p = moves[keyCode](board.piece);

    if (board.valid(p)) {
      // 이동이 가능한 상태라면 조각을 이동한다.
      board.piece.move(p);

      // 그리기 전에 이전 좌표를 지운다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw();
    }
  }
});
