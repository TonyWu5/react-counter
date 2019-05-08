import React from 'react';
import Count from './Count.jsx';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    let {count} = this.state;
    count += 1;
    this.setState({count});
  }

  decrementCount() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  resetCount() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <Count count={this.state.count} />
        <Buttons
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          resetCount={this.resetCount}
          currentCount={this.state.count}
        />
      </div>
    );
  }
}

export default App;
