import React, { Component } from 'react';
import ColorPicker from './Components/ColorPicker';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  colorsList = [
    {
      name: 'yellow',
      value: '#ffff00',
    },
    {
      name: 'red',
      value: '#ff0000',
    },
    {
      name: 'green',
      value: '#008000',
    },
    {
      name: 'blue',
      value: '#0000ff',
    },
  ]
  onChange(hex) {
    console.log(`Color was changed to ${hex}`);
  }
  render() {
    return (
      <div className="App">
        <ColorPicker
          onChange={this.onChange}
          colorsList={this.colorsList}
        />
      </div>
    );
  }
}

export default App;
