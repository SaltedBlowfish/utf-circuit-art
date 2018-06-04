import elementsConfig from "./config/elements";
import { randomValue } from "./helpers/array";
import { cellAbove, cellToTheLeft } from "./helpers/cells";
import { takeAChance } from "./helpers/numbers";

const characterBySymbol = (characterSymbol) => {
  return elementsConfig.find((element) => characterSymbol === element.value);
};

const applyElementRules = (element, aboveName, leftName) => {
  const { rules } = element;

  if (rules.validUnless.cellAbove.indexOf(aboveName) > -1) { return false; }
  if (rules.validUnless.cellToTheLeft.indexOf(leftName) > -1) { return false; }
  if (!isNaN(rules.chance) && !takeAChance(rules.chance)) { return false; }

  return true;
};

const allowedCharacters = (charAbove, charLeft) => {
  const aboveDefinition = characterBySymbol(charAbove);
  const leftDefinition = characterBySymbol(charLeft);

  let aboveName = "";
  let leftName = "";

  if (aboveDefinition) { aboveName = aboveDefinition.name; }
  if (leftDefinition) { leftName = leftDefinition.name; }

  return elementsConfig.filter(
    (element) => applyElementRules(element, aboveName, leftName),
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
