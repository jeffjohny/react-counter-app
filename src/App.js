import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Counters from "./component/Counters";
import Navbar from "./component/Navbar"

class App extends Component {
  state = {
    totalCounters: [
      {
        sum: 4,
        id: 1
      },
      {
        sum: 0,
        id: 2
      },
      {
        sum: 0,
        id: 3
      },
      {
        sum: 0,
        id: 4
      }
    ]
  };
  onDelete(id) {
    console.log('delete', id)
  }
  onIncrement(id) {
    console.log('increment', id)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counters
          totalCounters={this.state.totalCounters}
          onDelete={this.onDelete}
          onIncrement={this.onIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
