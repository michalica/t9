import React from 'react';
import Keyboard from '../components/Keyboard';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

const handler = jest.fn();

const props = {
    handleChange: handler,
    value: 'test',
};

it('render withou crasing', () => {
    const tree = renderer
        .create(<Keyboard {...props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders without crashing only with required props', () => {
    const wrapper = shallow<Keyboard>(
        <Keyboard
            {...props}
        />
    );

    expect(wrapper.instance().delete());
    expect(handler).lastCalledWith('tes')

    expect(wrapper.instance().handleClick('a'))
    expect(handler).lastCalledWith('testa')

    const handleChangeSpy = jest.fn();
    const wrapperShortValue = shallow<Keyboard>(
        <Keyboard
            handleChange={handleChangeSpy}
            value=""
        />
    );
    expect(wrapper.instance().delete());
    expect(handleChangeSpy).toBeCalledTimes(0);

});

