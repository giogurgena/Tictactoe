import React, { Component } from 'react';
import '../../assets/css/style.css';
import Settings from './components/Settings';
import Game from './components/Game';

class App extends Component {
  state = {
    settings: {
      column: 0,
      row: 0,
      number: '',
    },
    started: false,
    finished: false,
  };

  handleChange = (e) => {
    const settings = this.state.settings;
    settings[e.target.name] = e.target.value;
    this.setState({ settings });
  };

  handleClick = (propertyName) => {
    this.setState({ [propertyName]: !this.state[propertyName] });
  };

  render() {
    const { started, finished, settings } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="title text-center">Tic tac toe.</h1>
          <h1 className="game-result text-center">X wins.</h1>
          <Settings
            onChange={this.handleChange}
            settings={this.state.settings}
          />
          <div className="game">
            <div className="overlay">
              {!started ? (
                <button
                  className="play start"
                  onClick={() => this.handleClick('started')}
                >
                  <p className="text">Start</p>
                </button>
              ) : null}
              {finished ? (
                <button
                  className="play again"
                  onClick={() => this.handleClick('finished')}
                >
                  <p className="text">Play again</p>
                </button>
              ) : null}
            </div>
            <Game
              started={started}
              column={settings.column}
              row={settings.row}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
