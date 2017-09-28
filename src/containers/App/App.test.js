import test from 'ava';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

test('has foo', (t) => {
  const wrapper = shallow(<App />);
  t.true(wrapper.contains(<div>Hello MobX!</div>))
});
