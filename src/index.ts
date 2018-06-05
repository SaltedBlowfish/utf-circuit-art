import elementsConfig from "./config/elements";
import { randomValue } from "./helpers/array";
import { cellAbove, cellToTheLeft } from "./helpers/cells";
import { takeAChance } from "./helpers/numbers";

const defaultOptions = {
  blank: { chance: 1 },
  downAndRight: { chance: 1 },
  horizontal: { chance: 1 },
  node: { chance: 1 },
  rightAndDown: { chance: 1 },
  rightAndUp: { chance: 1 },
  upAndRight: { chance: 1 },
  vertical: { chance: 1 },
};

const characterBySymbol = (characterSymbol) => {
  return elementsConfig.find((element) => characterSymbol === element.value);
};

const applyElementRules = (element, aboveName, leftName, options) => {
  const { name, rules } = element;

  if (rules.validUnless.cellAbove.indexOf(aboveName) > -1) { return false; }
  if (rules.validUnless.cellToTheLeft.indexOf(leftName) > -1) { return false; }
  if (!takeAChance(options[name].chance)) { return false; }

  return true;
};

const allowedCharacters = (charAbove, charLeft, options) => {
  const aboveDefinition = characterBySymbol(charAbove);
  const leftDefinition = characterBySymbol(charLeft);

  let aboveName = "";
  let leftName = "";

  if (aboveDefinition) { aboveName = aboveDefinition.name; }
  if (leftDefinition) { leftName = leftDefinition.name; }

  return elementsConfig.filter(
    (element) => applyElementRules(element, aboveName, leftName, options),
  );
};

export const generate = (rows = 5, columns = 30, options = defaultOptions) => {
  const output = [];

  for (let row = 0; row < rows; row++) {
    if (!output[row]) { output.push([]); }

    for (let column = 0; column < columns; column++) {
      if (!output[row][column]) { output[row].push([]); }
      const above = cellAbove(output, row, column);
      const left = cellToTheLeft(output, row, column);
      const characterForCell = randomValue(
        allowedCharacters(above, left, options),
      );
      output[row][column] = characterForCell ? characterForCell.value : " ";
    }
  }

  let outputString = "";

  for (const row of output) {
    outputString += row.join("") + "\n";
  }

  return outputString;
};
