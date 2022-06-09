const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const canvasNext = document.getElementById("next");
const ctxNext = canvasNext.getContext("2d");

let board = new Board(ctx, ctxNext);

const moves = {
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.UP]: (p) => board.rotate(p, ROTATION.RIGHT),
  [KEY.Z]: (p) => board.rotate(p, ROTATION.LEFT),
};

function play() {
  board.reset();

  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;

  animate();
}

const time = { start: 0, elapsed: 0, level: 1000 };
function animate(now = 0) {
  time.elapsed = now - time.start;
  if (time.elapsed > time.level) {
    time.start = now;
    if (!board.drop()) {
      console.log("game over");
      return;
    }
  }

  // Clear board before drawing new state.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  board.draw();
  requestId = requestAnimationFrame(animate);
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
