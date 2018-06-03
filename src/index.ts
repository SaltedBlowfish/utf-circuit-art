import { randomValue } from "./helpers/array";

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
      density: 1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
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
        cellToTheLeft: ["blank", "vertical", "blank", "rightAndDown", "rightAndUp"],
      },
    },
    // ─
    value: "\u2500",
  },
  {
    name: "node",
    rules: {
      density: 0.1,
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
      density: 1,
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╮
    value: "\u256E",
  },
  {
    name: "rightAndUp",
    rules:   {
      density: 1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╯
    value: "\u256F",
  },
  {
    name: "upAndRight",
    rules: {
      density: 1,
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
      density: 1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
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

export const cellAbove = (currentGrid, elementRow, elementColumn) => {
  if (!currentGrid[elementRow - 1]) { return; }
  return currentGrid[elementRow - 1][elementColumn];
};

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
        element.rules.density !== undefined &&
        Math.random() >= element.rules.density
      ) {
        return false;
      }
      return true;
    },
  );
};

export const generate = (rows = 30, columns = 150) => {
  const output = [];

  for (let row = 0; row < rows; row++) {
    if (!output[row]) { output.push([]); }

    for (let column = 0; column < columns; column++) {
      if (!output[row][column]) { output[row].push([]); }
      const above = cellAbove(output, row, column);
      const left = cellToTheLeft(output, row, column);
      const characterForCell = randomValue(allowedCharacters(above, left));
      output[row][column] = characterForCell ? characterForCell.value : " ";
    }
  }

  let outputString = "";

  for (const row of output) {
    outputString += row.join("") + "\n";
  }

  return outputString;
};

console.log(generate());
