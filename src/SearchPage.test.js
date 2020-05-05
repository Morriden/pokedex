import React from 'react';
import SearchPage from './App.js';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

test('will come back without stuff', () => {
    const wrapper = shallow(<SearchPage />)

   expect(wrapper).toMatchSnapshot();

});

test('will come back with stuff', () => {
    const wrapper = shallow(<SearchPage name="some name"/>)

   expect(wrapper).toMatchSnapshot();

});