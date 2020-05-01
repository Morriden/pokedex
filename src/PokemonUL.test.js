import React from 'react';
import PokemonUL from './PokemonUL.js';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

test('will come back without stuff', () => {
    const wrapper = shallow(<PokemonUL />)

   expect(wrapper).toMatchSnapshot();

});

test('will come back with stuff', () => {
    const wrapper = shallow(<PokemonUL name=""/>)

   expect(wrapper).toMatchSnapshot();

});