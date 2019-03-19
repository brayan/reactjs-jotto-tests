import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const setupWrapper = (initialState = {}) => {
  const wrapper = shallow(<App {...initialState} />);
  return wrapper;
}

describe("redux props", () => {

  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setupWrapper({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("has access to secretWord state", () => {
    const secretWord = 'party';
    const wrapper = setupWrapper({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("has access to guessWords state", () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setupWrapper({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

});

test("guetSecretWord run on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }

  const wrapper = shallow(<App {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordMockCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordMockCount).toBe(1);

});