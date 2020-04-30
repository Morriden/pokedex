import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

test('will come back with stuff', () => {
    const wrapper = shallow(<App />)

   expect(wrapper.find('h3').length).toBe(1);
   expect(wrapper.find('img').length).toBe(2);

});
















// test('if there is no greeting, render no h1', () => {
//     const wrapper = shallow(<Header />);

//     expect(wrapper.find('h1').length).toBe(0);
// });