import moxios from 'moxios';

import { storeFactory } from '../../test/testHelper';
import { getSecretWord } from './';

// Testing Reducer and Action (Integration)
describe("getSecretWord action creator", () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    // Test async actions
    test("should add a response word to state", () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            });

    });

});