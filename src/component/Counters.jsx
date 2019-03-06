import React, { Component } from "react";

class Counters extends Component {
  parseCounter(onDelete, onIncrement) {
    const retrunArr = this.props.totalCounters.map(counter => {
      return (
        <div key={counter.id}>
          <div>{counter.sum}</div>
          <button
            className="btn btn-primary"
            onClick={() => onIncrement(counter.id)}
          >
            +
          </button>
          <button
            className="btn btn-dangour"
            onClick={() => this.props.onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      );
    });
    return retrunArr;
  }
  render() {
    return (
      <React.Fragment>
        {this.parseCounter(this.props.onDelete, this.props.onIncrement)}
      </React.Fragment>
    );
  }
}

export default Counters;
