import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./Sudoku/Sudoku.css"
import Grid from './Sudoku/Grid';
import { gridValues, parseGrid, solve } from '../Algorithms/sudoku';

class App extends Component {

  constructor() {
    super();
    // const value = "003020600900305001001806400008102900700000008006708200002609500800203009005010300"
    const value = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
    const parsed = value.replace(/[^0-9.]/g, "").replace(/\./g, "0");
    const grid = gridValues(parsed);
    const solution = parseGrid(parsed);
    const search = solve(parsed);
    this.state = {
      value: value,
      parsed: value,
      grid,
      solution,
      search
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const parsed = value.replace(/[^0-9.]/g, "").replace(/\./g, "0");
    const t1 = new Date();
    const grid = gridValues(parsed);
    const t2 = new Date();
    const solution = parseGrid(parsed);
    const t3 = new Date();
    const search = solve(parsed);
    const t4 = new Date();
    const [d1, d2, d3] = [t2 - t1, t3 - t2, t4 - t3];
    this.setState({ value, parsed, grid, solution, search, d1, d2, d3 });
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
        <Grid grid={this.state.search} />
        <textarea value={this.state.value} onChange={this.handleChange} rows="5" cols="40" />
        <br />
        <a href="http://norvig.com/sudoku.html">Sudoku article</a> - 
        { this.state.d1 }ms - { this.state.d2 }ms - { this.state.d3 }ms
        </main>
      </div>
    );
  }
}

export default App;
