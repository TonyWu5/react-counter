import React from 'react';
const { Component } = React;
class Buttons extends Component {
  render() {
    return (
      <div id='buttons'>
        <button
        id='incrementButton'
        type="button"
        onClick={() => this.props.incrementCount()}> Increment Count </button>
        <button
        id='decrementButton'
        type="button"
        onClick={() => this.props.decrementCount()}> Decrement Count </button>
      </div>
    )
  }
}

export default Buttons;
