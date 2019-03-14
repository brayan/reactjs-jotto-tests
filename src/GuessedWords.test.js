import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../test/testHelper';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setupShallowWrapper = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

test("should not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setupShallowWrapper({ guessedWords: [] });
    });

    test("should render without error", () => {
        const component = findByTestAttribute(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test("should render instructions to guess a word", () => {
        const instructions = findByTestAttribute(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });

});

describe("if there are words guessed", () => {

    let wrapper;

    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
    ];

    beforeEach(() => {
        wrapper = setupShallowWrapper({ guessedWords });
    });

    test("should render without error", () => {
        const component = findByTestAttribute(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test("should render guessed words section", () => {
        const guessedWordsNode = findByTestAttribute(wrapper, "guessed-words");
        expect(guessedWordsNode.length).toBe(1);
    });

    test("should display the correct number of guessed words", () => {
        const guessedWordsNodes = findByTestAttribute(wrapper, "guessed-word");
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });

});