import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttribute } from '../test/testHelper';
import { Input } from "./Input";

const setupShallowWrapper = (initialState = {}) => {
    const wrapper = shallow(<Input {...initialState} />);
    return wrapper;
}

describe("render", () => {

    describe("word has not been guessed", () => {

        let wrapper;

        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setupShallowWrapper(initialState);
        });

        test("should render component without error", () => {
            const component = findByTestAttribute(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("should render input box", () => {
            const inputBox = findByTestAttribute(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });

        test("should render submit button", () => {
            const submitButton = findByTestAttribute(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });

    });

    describe("word has been guessed", () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setupShallowWrapper({ success: true });
        });

        test("should render component without error", () => {
            const component = findByTestAttribute(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("should not render input box", () => {
            const inputBox = findByTestAttribute(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });

        test("should not render submit button", () => {
            const submitButton = findByTestAttribute(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });

    });

});

describe("redux props", () => {

    test("has success piece of state as prop", () => {
        const success = true;
        const wrapper = setupShallowWrapper({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    /*test("should guessWord action creator be a function prop", () => {
        const wrapper = setupShallowWrapper();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });*/

});


describe("guessWord action creator call", () => {

    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';

    beforeEach(() => {
        guessWordMock = jest.fn();

        const props = {
            guessWord: guessWordMock
        };

        wrapper = setupShallowWrapper(props);

        wrapper.instance().inputBox.current = { value: guessedWord };

        const submitButton = findByTestAttribute(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });

    test("should call guessWord when button is clicked", () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    test("should call guessWord with input value as argument", () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0];
        expect(guessedWordArg).toBe(guessedWord);
    });

    test("should input box clear on submit", () => {
        const inputBoxValue = wrapper.instance().inputBox.current.value;
        expect(inputBoxValue).toBe("");
    });

});
