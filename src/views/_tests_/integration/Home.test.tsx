import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Home from '../../scenes/Home';

const fetchApi = jest.fn();
const doRequest = jest.fn();
const props = {
    fetchApi: fetchApi,
    letters: ['abc', 'def'],
    isLoading: false,
    validationError: false,
    formValue: '12',
    doRequest: doRequest,
};



afterEach(cleanup)

test('It should call fetch', () => {
    const {getByText} = render(<Home
        {...props}
    />)
    const keyBoardButton = getByText('1');
    fireEvent.click(keyBoardButton);
    expect(fetchApi).toBeCalledWith('121');

})

test('It should call delete', () => {
    const {getByText} = render(<Home
        {...props}
    />)

    // console.log(getAllByRole('delete-button'));
    const keyBoardButton = getByText('<');
    console.log(keyBoardButton)
    fireEvent.click(keyBoardButton);
    expect(fetchApi).toBeCalledWith('1');

})

test('It should call doReqeuest', () => {
    // const requestMock = jest.fn()
    const customProps = {
        fetchApi: fetchApi,
        letters: ['abc', 'def', 'abc', 'def', 'abc', 'def', 'abc', 'def', 'abc', 'def', 'abc', 'def', 'abc', 'def'],
        isLoading: false,
        validationError: false,
        formValue: '124567',
        doRequest: doRequest,
    };

    const {getByText} = render(<Home
        {...customProps}
    />)

    const keyBoardButton = getByText('+');
    console.log(keyBoardButton)
    fireEvent.click(keyBoardButton);
    expect(doRequest).toBeCalledWith('124567', true);

})

test('It should call fetch', () => {
    const {getByPlaceholderText} = render(<Home
        {...props}
    />)
    const keyBoardButton = getByPlaceholderText('Search for ...');
    fireEvent.change(keyBoardButton,  { target: { value: '9999' } })
    expect(fetchApi).toBeCalledWith('9999');

})
