import React from 'react';

const Box = ({ value, columnIndex, rowIndex, onClick }) => {
  return (
    <div className="box" onClick={() => onClick(rowIndex, columnIndex)}>
      {value}
    </div>
  );
};

export default Box;
