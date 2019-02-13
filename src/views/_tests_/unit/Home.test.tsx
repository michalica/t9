import React from 'react';
import renderer from "react-test-renderer";
import Home from '../../scenes/Home';

const fethcApiHandler = jest.fn();
const doRequestHandler = jest.fn();

const props = {
    fetchApi: fethcApiHandler,
    letters: ['a','b'],
    isLoading: true,
    validationError: false,
    formValue: '123',
    doRequest: doRequestHandler,
}

it('render withou crasing', () => {
    const tree = renderer
        .create(<Home {...props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
