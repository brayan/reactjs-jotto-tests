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

describe("update state", () => {

    test("", () => {

    });

});
