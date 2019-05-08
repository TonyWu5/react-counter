import React from 'react';

const Buttons = (props) => {
  const decrementButtonText = props.currentCount > 0 ? 'Decrement Count' : 'No Decrement Below 0';
  const decrementButtonID = props.currentCount > 0 ? 'decrementButton' : 'below-zero-decrement';
  return (
    <div id='counter-buttons'>
      <button
        id={decrementButtonID}
        className='buttons'
        type="button"
        onClick={() => props.decrementCount()}> {decrementButtonText} </button>
      <button
        id='resetButton'
        className='buttons'
        type="button"
        onClick={() => props.resetCount()}> RESET (zero) </button>
      <button
        id='incrementButton'
        className='buttons'
        type="button"
        onClick={() => props.incrementCount()}> Increment Count </button>
    </div>
  );
};

export default Buttons;
