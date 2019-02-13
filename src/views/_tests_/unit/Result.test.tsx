import React from 'react';
import Result from '../../components/Result';
import renderer from 'react-test-renderer';


import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const handler = jest.fn();

const testNames = [
    'renders without crashing without MoreButton',
    'renders without crashing with MoreButton',
    'renders without crashing empty'
];

const props = [
        {
            letters: ['abc', 'fds'],
            isLoading: true,
            handleShowMoreButtonClick: handler,
        },
        {
            letters: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],

            isLoading: true,
            handleShowMoreButtonClick: handler,
        },
        {
            letters: ['1'],
            isLoading: true,
            handleShowMoreButtonClick: handler,
        }
    ];

props.map((currentProps, key) => {
    testResult(currentProps, testNames[key]);

});



function testResult(currentProps:{
    letters: Array<string>,
    isLoading: boolean,
    handleShowMoreButtonClick: Function},
                    name:string) {
    it(name, () => {
        const tree = renderer
            .create(<Result {...currentProps} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
}
