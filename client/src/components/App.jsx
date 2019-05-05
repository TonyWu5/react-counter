import React from 'react';
import Count from './Count.jsx';
import Button from './Button.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    let {count} = this.state;
    count += 1;
    this.setState({
      count: count
    })
  }

  decrementCount() {
    this.setState({
      count: this.state.count-1
    })
  }
  
  render() {
    return (
      <div>
        <Count count={this.state.count} />
        <Button
        incrementCount={this.incrementCount}
        decrementCount={this.decrementCount}
        />
      </div>
    )
  }
}

export default App;
