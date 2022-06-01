import { COLS, BLOCK_SIZE, ROWS } from "./constants.js";
import { Board } from "./board.js";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
  board.reset();
  console.table(board.grid);
}