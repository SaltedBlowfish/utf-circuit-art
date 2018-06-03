import { randomValue } from "./helpers/array";

//         0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
// U+250x  ─     │
// U+256x                                         ╭  ╮  ╯
// U+257x  ╰
// ●

export const elements = [
  {
    name: "blank",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // space
    value: " ",
  },
  {
    name: "downAndRight",
    rules: {
      validUnless: {
        cellAbove: ["horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╰
    value: "\u2570",
  },
  {
    name: "horizontal",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["vertical", "blank", "rightAndDown", "rightAndUp"],
      },
    },
    // ─
    value: "\u2500",
  },
  {
    name: "node",
    rules: {
      chance: 0.8,
      validUnless: {
        cellAbove: ["node"],
        cellToTheLeft: ["node"],
      },
    },
    // ●
    value: "\u25CF",
  },
  {
    name: "rightAndDown",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╮
    value: "\u256E",
  },
  {
    name: "rightAndUp",
    rules:   {
      validUnless: {
        cellAbove: ["horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╯
    value: "\u256F",
  },
  {
    name: "upAndRight",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╭
    value: "\u256D",
  },
  {
    name: "vertical",
    rules: {
      validUnless: {
        cellAbove: ["horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // │
    value: "\u2502",
  },
];

export const cellToTheLeft = (currentGrid, elementRow, elementColumn) => {
  return currentGrid[elementRow][elementColumn - 1];
};

(window as any).cellToTheLeft = cellToTheLeft;

export const cellAbove = (currentGrid, elementRow, elementColumn) => {
  if (!currentGrid[elementRow - 1]) { return; }
  return currentGrid[elementRow - 1][elementColumn];
};

(window as any).cellAbove = cellAbove;

export const characterBySymbol = (characterSymbol) => {
  return elements.find((element) => characterSymbol === element.value);
};

export const allowedCharacters = (charAbove, charLeft) => {
  const aboveDefinition = characterBySymbol(charAbove);
  const leftDefinition = characterBySymbol(charLeft);

  let aboveName;
  let leftName;

  if (!aboveDefinition) {
    aboveName = "";
  } else {
    aboveName = aboveDefinition.name;
  }
  if (!leftDefinition) {
    leftName = "";
  } else {
    leftName = leftDefinition.name;
  }

  return elements.filter(
    (element) => {
      if (element.rules.validUnless.cellAbove.indexOf(aboveName) > -1) {
        return false;
      }
      if (element.rules.validUnless.cellToTheLeft.indexOf(leftName) > -1) {
        return false;
      }
      if (
        element.rules.chance !== undefined &&
        Math.random() <= element.rules.chance
      ) {
        return false;
      }
      return true;
    },
  );
};

export const generate = (rows = 25, columns = 150) => {
  const output = [];

  // for rows
  for (let row = 0; row < rows; row++) {
    if (!output[row]) { output.push([]); }

    for (let column = 0; column < columns; column++) {
      if (!output[row][column]) { output[row].push([]); }

      // TODO: Find the right character for this element
      const above = cellAbove(output, row, column);
      const left = cellToTheLeft(output, row, column);

      output[row][column] = randomValue(allowedCharacters(above, left)).value;
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
