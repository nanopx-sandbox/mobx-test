import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Counter from "../../components/Counter/Counter";

@inject('counter')
@observer
class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Hello MobX!</h1>

        <Counter count={counter.count} />
        <button onClick={counter.onIncrement} disabled={counter.isLoading}>+1</button>
        <button onClick={counter.onDecrement} disabled={counter.isLoading}>-1</button>

        <button onClick={() => counter.onAsyncIncrement(1000)} disabled={counter.isLoading}>+1 Async</button>

        <p>
          {counter.isLoading ? 'Loading ....' : 'Done!'}
        </p>
      </div>
    );
  }
}

export default App;
