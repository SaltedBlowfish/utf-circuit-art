import elementsConfig from "./config/elements";
import { randomValue } from "./helpers/array";

export const cellToTheLeft = (currentGrid, elementRow, elementColumn) => {
  return currentGrid[elementRow][elementColumn - 1];
};

export const cellAbove = (currentGrid, elementRow, elementColumn) => {
  if (!currentGrid[elementRow - 1]) { return; }
  return currentGrid[elementRow - 1][elementColumn];
};

export const characterBySymbol = (characterSymbol) => {
  return elementsConfig.find((element) => characterSymbol === element.value);
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

  return elementsConfig.filter(
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

export const generate = (rows = 5, columns = 30) => {
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
