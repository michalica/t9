import React from 'react';
import UserInput from '../components/UserInput';
import {shallow} from 'enzyme';

const handler = jest.fn();

const props = {
    handleChange: handler,
    isLoading: true,
    validationError: false,
    formValue: "val",
    type: "email",
    placeholder: "Placeholder",

};

it('renders without crashing only with required props', () => {
    const wrapper = shallow(
        <UserInput
            formValue="test"
            handleChange={handler}
        />
    )
    expect(wrapper.find('Input').length).toEqual(1)
});

it('renders without crashing with all props', () => {
    const wrapper = shallow(
        <UserInput
            {...props}
        />
    )
    expect(wrapper.find('Input').length).toEqual(1)
    expect(wrapper.find('Input').prop('loading')).toEqual(props.isLoading)
    expect(wrapper.find('Input').prop('error')).toEqual(props.validationError)
    expect(wrapper.find('Input').prop('value')).toEqual(props.formValue)
    expect(wrapper.find('Input').prop('type')).toEqual(props.type)
    expect(wrapper.find('Input').prop('placeholder')).toEqual(props.placeholder)
});
