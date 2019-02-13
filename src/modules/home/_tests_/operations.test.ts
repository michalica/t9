import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import createDebounce from 'redux-debounced';
import {
    fetchT9api,
    doRequest
}
    from "../operations";

export const createStore = (defaultState: any) => {
    const middlewares = [createDebounce(), thunk];
    const mock = configureMockStore(middlewares);
    return mock(defaultState);
};

const defaultState = {
    modules: {
        home: {
            letters: [],
            pagination: 0,
            isLoading: false,
            hasError: false,
            form: {
                validationError: false,
                value: '',
            }
        },
    }
};
describe('testing operation fetT9Api', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('fetch with string', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        return store.dispatch(fetchT9api('1234'))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            });
    });
    it('fetch with empty string', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        store.dispatch(fetchT9api(''));
        expect(store.getActions()).toMatchSnapshot();
    });

    it('fetch with undefined', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        store.dispatch(fetchT9api(null));
        expect(store.getActions()).toMatchSnapshot();
    });
});

describe('testing operations doReqeuest', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('doRequest with string, replace letters', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        return store.dispatch(doRequest('1234'))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            });
    });

    it('doRequest with string, update letters', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        return store.dispatch(doRequest('1234', true))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            });
    });


    it('doRequest with undefined, error expected', () => {
        fetchMock
            .getOnce('http://localhost:3001/num?num=1234&page=0', {
                body: {
                    letters: ['abc', 'def']
                },
                headers: {'content-type': 'application/json'}
            })
        const store = createStore(defaultState);
        return store.dispatch(doRequest(null ))
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            });
    });
});

