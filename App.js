import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  // constructor() {
  //   super();
  //   //console.log('App - Constructor');
  // }


  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 3},
      {id: 4, value: 0},
      {id: 5, value: 0},
    ]
  }

  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((counter) => counter.id !== counterId);
    this.setState(
        {counters: counters}
    )
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      })
      this.setState(
          {  counters: counters }
      )
  }

  handleIncrease = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;

      this.setState(
          { counters }
      )
  }
  // handleDisable = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   const disabled = "disabled";
  //    return counters[index] === 0 ? disabled : null; 
  // }

  handleDecrease = (counter) => {
      
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      
      counters[index].value--;

      this.setState(
          { counters }
      )
  }
//   componentDidMount() {
//     //Ajax Call - get data from server
//     //this.setState({ datat from server })
//     console.log('App - Mounted');
// }
// componentWillUpdate() {
//     console.log('App - Will update ');
// }

// componentDidUpdate() {
//     console.log('App - did updated ');
// }

  render() {
    return (
      <React.Fragment>
          <NavBar 
            className = "container"
            countersTotal = {this.state.counters.filter((count) => count.value > 0).length}
            />
          <main className = "container">
              <Counters
                counters = {this.state.counters}
                onReset = {this.handleReset}
                onDelete = {this.handleDelete}
                onIncrease = {this.handleIncrease}
                onDecrease = {this.handleDecrease} />
  
          </main>
      </React.Fragment>
    );

  }

  
}

export default App;
