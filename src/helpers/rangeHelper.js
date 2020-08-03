export const getRangeTo = (n) => {
  return Array(parseInt(n))
    .fill()
    .map((_, i) => i);
};

export const generateBoxArray = (rows, columns) => {
  const result = [];
  for (let i = 0; i < rows; i++) {
    const columnsArray = [];
    for (let j = 0; j < columns; j++) {
      columnsArray.push({
        value: '',
      });
    }
    result.push(columnsArray);
  }
  return result;
};
