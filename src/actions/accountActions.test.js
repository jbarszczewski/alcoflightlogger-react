import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from './accountActions';
import * as types from './actionTypes';
import thunk  from 'redux-thunk'

describe('account action', () => {
    let store;
    const middlewares = [thunk];

    beforeEach(() => {
        const mockStore = configureMockStore(middlewares);
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('gets account by email', () => {
    fetchMock.get('*', { hello: 'world' });
    store.dispatch(actions.login({ email: 'test', password: 'pass' }))
     .then(() => {
            expect(store.getActions()).toEqual(
                [
                    { type: types.LOGIN_SUCCESS },
                    { payload: { hello: 'world' } }
                ]);
        });
    });
});
