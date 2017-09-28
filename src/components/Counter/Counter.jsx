import React from 'react';

const Counter = ({ count }) => <div>Count: { count }</div>;

Counter.defaultProps = {
  count: 0,
};

export default Counter;
