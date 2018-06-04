export const cellToTheLeft = (currentGrid, elementRow, elementColumn) => {
  return currentGrid[elementRow][elementColumn - 1];
};

export const cellAbove = (currentGrid, elementRow, elementColumn) => {
  if (!currentGrid[elementRow - 1]) { return; }
  return currentGrid[elementRow - 1][elementColumn];
};
