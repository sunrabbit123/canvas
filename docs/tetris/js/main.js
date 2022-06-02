import { COLS, BLOCK_SIZE, ROWS } from "./constants.js";
import { Board } from "./board.js";
import { Piece } from "./piece.js";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(COLS, ROWS);

const playButton = document.getElementById("play");
playButton.addEventListener("click", play);
export function play() {
  board.reset();
  let playBoard = board.getEmptyBoard();

  let piece = new Piece(ctx);
  piece.draw();

  playBoard.piece = piece;
}
