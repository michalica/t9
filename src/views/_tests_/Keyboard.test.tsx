import React from 'react';
import Keyboard from '../components/Keyboard';
import {shallow} from 'enzyme';

const handler = jest.fn();

const props = {
    handleChange: handler,
    value: 'test',
};

it('renders without crashing only with required props', () => {
    const wrapper = shallow(
        <Keyboard
            {...props}
        />
    );

});

