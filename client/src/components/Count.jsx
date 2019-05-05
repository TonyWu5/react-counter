import React from 'react';

class Count extends React.Component {
  render() {
    return (
      <div id="count">
        {this.props.count}
      </div>
    )
  }
}

export default Count;
