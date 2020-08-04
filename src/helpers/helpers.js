export const generateBoxArray = (rows, columns) => {
  const result = [];
  for (let i = 0; i < rows; i++) {
    const columnsArray = [];
    for (let j = 0; j < columns; j++) {
      columnsArray.push({ value: '' });
    }
    result.push(columnsArray);
  }
  return result;
};

export const ifWins = (value, rows, winNumber) => {
  let valueCount = 0;
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const columns = rows[rowIndex];
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].value === value) {
        valueCount++;
        if (valueCount === winNumber) {
          return true;
        }
      } else {
        valueCount = 0;
      }
    }
  }

  valueCount = 0;
  const rowLength = rows.length;
  const columnsLength = rows[0].length;
  for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
      if (rows[rowIndex][columnIndex].value === value) {
        valueCount++;

        if (valueCount === winNumber) {
          return true;
        }
      } else {
        valueCount = 0;
      }
    }
  }

  return false;
};

export const ifDraw = (boxes) => {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];

    for (let j = 0; j < box.length; j++) {
      const column = box[j];
      if (!column.value) {
        return false;
      }
    }
  }
  return true;
};
