import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from './accountActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk'

describe('account action', () => {
    let store;

    beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('gets account by email', () => {
        const accountData = { username: 'testUser' };
        fetchMock.get('*', accountData);
        return store.dispatch(actions.login({ email: 'test', password: 'pass' }))
            .then(() => {
                expect(store.getActions()).toEqual(
                    [
                        { type: types.LOGIN_SUCCESS, account: accountData }
                    ]);
            });
    });
});
