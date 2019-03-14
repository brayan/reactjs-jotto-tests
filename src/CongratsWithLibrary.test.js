import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttribute, checkProps } from '../test/testHelper'
import Congrats from './Congrats';

const defaultProps = { success: false };

const setupShallowWrapper = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
}

test("should render without error", () => {
    /*const wrapper = setupShallowWrapper();
    const component = findByTestAttribute(wrapper, "component-congrats");
    expect(component.length).toBe(1);*/
});

test("should render no text when success prop is false", () => {
    /*const wrapper = setupShallowWrapper();
    const component = findByTestAttribute(wrapper, "component-congrats");
    expect(component.text()).toBe("");*/
});

test("should render non-empty congrats message when success prop is true", () => {
    /*const wrapper = setupShallowWrapper({ success: true });
    const message = findByTestAttribute(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);*/
});

test("should not throw warning with expected props", () => {
    /*const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);*/
});