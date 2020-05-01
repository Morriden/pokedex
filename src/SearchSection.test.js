import React from 'react';
import SearchSection from './SearchSection.js';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

test('will come back without stuff', () => {
    const wrapper = shallow(<SearchSection />)

   expect(wrapper).toMatchSnapshot();

});

test('will come back with stuff', () => {
    const wrapper = shallow(<SearchSection name="some name"/>)

   expect(wrapper).toMatchSnapshot();

});