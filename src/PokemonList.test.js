import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from './PokemonList.js';
// import renderer from 'react-test-renderer';

test('will come back without stuff', () => {
    const wrapper = shallow(<PokemonList />)

   expect(wrapper).toMatchSnapshot();

});

test('will come back with stuff', () => {
    const wrapper = shallow(<PokemonList name="some name"/>)

   expect(wrapper).toMatchSnapshot();

});