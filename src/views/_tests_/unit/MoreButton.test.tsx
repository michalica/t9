import React from 'react';
import MoreButton from '../../components/MoreButton';
import {shallow} from 'enzyme';

const handler = jest.fn();

const props = {
    text: 'buttonText',
    handleClick: handler,
};


it('renders without crashing only with required props', () => {
    const wrapper = shallow(
        <MoreButton
            {...props}
        />
    )
    expect(wrapper.find('Button').length).toEqual(1)
});

it('renders without crashing with all props', () => {
    const wrapper = shallow(
        <MoreButton
            {...props}
            isLoading={true}
        />
    )
    expect(wrapper.find('Button').length).toEqual(1)
    expect(wrapper.find('Button').prop('loading')).toEqual(true)

});
