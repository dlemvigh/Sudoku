import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./Sudoku/Sudoku.css"
import Grid from './Sudoku/Grid';
import { gridValues, parseGrid } from '../Algorithms/sudoku';

class App extends Component {

  constructor() {
    super();
    const value = "003020600900305001001806400008102900700000008006708200002609500800203009005010300"
    this.state = {
      value: value,
      parsed: value,
      grid: gridValues(value),
      solution: parseGrid(value)
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const parsed = value.replace(/[^0-9.]/g, "").replace(/\./g, "0");
    const grid = gridValues(parsed);;
    const solution = parseGrid(parsed);
    this.setState({ value, parsed, grid, solution });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-content">
        <p className="App-intro">
        </p>
        <Grid grid={this.state.grid} />
        <Grid grid={this.state.solution} />
        <textarea value={this.state.value} onChange={this.handleChange} rows="5" cols="40" />
        </main>
      </div>
    );
  }
}

export default App;
