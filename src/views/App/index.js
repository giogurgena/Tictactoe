import React, { Component } from 'react';
import '../../assets/css/style.css';
import Settings from './components/Settings';
import Game from './components/Game';
import { generateBoxArray, ifWins, ifDraw } from '../../helpers/helpers';

const initState = {
  settings: {
    column: 0,
    row: 0,
    number: 0,
  },
  started: false,
  finished: false,
  winner: '',
  boxes: [],
  current: 'x',
};

class App extends Component {
  state = {
    ...initState,
  };

  handleChange = (e) => {
    const settings = this.state.settings;
    settings[e.target.name] = parseInt(e.target.value);
    this.setState({ settings });
  };

  handleStart = () => {
    const { row, column, number } = this.state.settings;
    if (!row || !column || !number) {
      alert('please fill the form');
      return;
    }
    const boxes = generateBoxArray(row, column);
    this.setState({ started: true, boxes });
  };

  handlePlayAgain = () => {
    this.setState({ ...initState });
  };

  handleBoxClick = (rowIndex, columnIndex) => {
    let { boxes, current, settings, winner, finished } = this.state;
    const box = boxes[rowIndex][columnIndex];
    if (box.value) {
      alert('box is already filled');
      return;
    }
    box.value = current;

    if (ifWins(current, boxes, settings.number)) {
      winner = current;
      finished = true;
    } else {
      if (ifDraw(boxes)) {
        winner = 'Draw';
        finished = true;
      }
    }
    this.setState({
      boxes,
      winner,
      finished,
      current: current === 'x' ? 'o' : 'x',
    });
  };

  render() {
    const { started, finished, settings, boxes } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title text-center">Tic tac toe.</h1>
          {finished && (
            <h1 className="game-result text-center">
              {this.state.winner} wins.
            </h1>
          )}

          <Settings onChange={this.handleChange} settings={settings} />
          <div className="game">
            <div className="overlay">
              {!started ? (
                <button
                  className="play start"
                  onClick={() => this.handleStart()}
                >
                  <p className="text">Start</p>
                </button>
              ) : null}
              {finished ? (
                <button
                  className="play again"
                  onClick={() => this.handlePlayAgain()}
                >
                  <p className="text">Play again</p>
                </button>
              ) : null}
            </div>
            <Game
              started={started}
              boxes={boxes}
              onBoxClick={this.handleBoxClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
