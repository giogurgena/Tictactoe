import React from 'react';

import { generateBoxArray } from '../../../helpers/rangeHelper';

import Box from './Box';

const Game = ({ started, column, row }) => {
  if (!started) {
    return <div className="game-boxes"></div>;
  }

  var array = generateBoxArray(row, column);
  console.log(array);
  return (
    <div className="game-boxes">
      {array.map((rowItem, index) => {
        return (
          <div key={index}>
            {rowItem.map((columnItem, index) => {
              return <Box key={index} index={index} value={columnItem.value} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
