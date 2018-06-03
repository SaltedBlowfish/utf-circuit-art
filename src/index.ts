import { randomValue } from "./helpers/object";

export const elements = {
  blank:        " ",
  down:         "\u2502",
  downAndRight: "\u2570",
  left:         "\u2500",
  node:         "O",
  right:        "\u2500",
  rightAndDown: "\u256E",
  rightAndUp:   "\u256F",
  up:           "\u2502",
  upAndRight:   "\u256D",
};

export const cellToTheLeft = (currentGrid, elementRow, elementColumn) => {
  return currentGrid[elementRow][elementColumn - 1];
};

(window as any).cellToTheLeft = cellToTheLeft;

export const cellAbove = (currentGrid, elementRow, elementColumn) => {
  return currentGrid[elementRow - 1][elementColumn];
};

(window as any).cellAbove = cellAbove;

export const generate = (rows = 25, columns = 150) => {
  const output = [];

  // for rows
  for (let row = 0; row < rows; row++) {
    if (!output[row]) { output.push([]); }

    for (let column = 0; column < columns; column++) {
      if (!output[row][column]) { output[row].push([]); }
      output[row][column] = randomValue(elements);
    }
  }

  let outputString = "";

  for (const row of output) {
    outputString += row.join("") + "\n";
  }

  return outputString;
};

const generated = generate();

// Make `generate` function available on window
(window as any).generate = generate;
(window as any).generated = generated;

console.log(generated);

// O────╮    O────
//      O╼╼╼╼╯
//      │
//      │
//
//         0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
// U+250x  ─  ━  │  ┃  ┄  ┅  ┆  ┇  ┈  ┉  ┊  ┋  ┌  ┍  ┎  ┏
// U+251x  ┐  ┑  ┒  ┓  └  ┕  ┖  ┗  ┘  ┙  ┚  ┛  ├  ┝  ┞  ┟
// U+252x  ┠  ┡  ┢  ┣  ┤  ┥  ┦  ┧  ┨  ┩  ┪  ┫  ┬  ┭  ┮  ┯
// U+253x  ┰  ┱  ┲  ┳  ┴  ┵  ┶  ┷  ┸  ┹  ┺  ┻  ┼  ┽  ┾  ┿
// U+254x  ╀  ╁  ╂  ╃  ╄  ╅  ╆  ╇  ╈  ╉  ╊  ╋  ╌  ╍  ╎  ╏
// U+255x  ═  ║  ╒  ╓  ╔  ╕  ╖  ╗  ╘  ╙  ╚  ╛  ╜  ╝  ╞  ╟
// U+256x  ╠  ╡  ╢  ╣  ╤  ╥  ╦  ╧  ╨  ╩  ╪  ╫  ╬  ╭  ╮  ╯
// U+257x  ╰  ╱  ╲  ╳  ╴  ╵  ╶  ╷  ╸  ╹  ╺  ╻  ╼  ╽  ╾  ╿
