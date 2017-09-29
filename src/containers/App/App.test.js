import test from 'ava';
import React from 'react';
import App from './App.jsx';
import CounterStore from "../../models/Counter/CounterStore";

const counter = new CounterStore();
const wrapper = shallow(<App counter={ counter } />);

test('<App>', (t) => {
  t.true(wrapper.props().counter === counter);
});
