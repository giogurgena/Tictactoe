import React from 'react';

const Settings = ({ onChange, settings }) => {
  const { column, row, number } = settings;
  return (
    <form className="game-settings" onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        className="settings"
        placeholder="Column"
        name="column"
        value={column}
        onChange={onChange}
      />
      <input
        type="number"
        className="settings"
        placeholder="Row"
        name="row"
        value={row}
        onChange={onChange}
      />
      <input
        type="number"
        className="settings winning-number"
        placeholder="Winning #"
        name="number"
        value={number}
        onChange={onChange}
      />
    </form>
  );
};

export default Settings;
