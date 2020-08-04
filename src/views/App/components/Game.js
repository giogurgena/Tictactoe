import React from 'react';

import Box from './Box';

const Game = ({ started, boxes, onBoxClick }) => {
  if (!started) {
    return <div className="game-boxes"></div>;
  }

  return (
    <div className="game-boxes">
      {boxes.map((rowItem, rowIndex) => {
        return (
          <div className="box-row" key={rowIndex}>
            {rowItem.map((columnItem, columnIndex) => {
              return (
                <Box
                  key={columnIndex}
                  value={columnItem.value}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  onClick={onBoxClick}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
