import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { SignUpModal } from '../../../components/modals/SignUpModal';

/**
 * @function
 * @returns {jsx} - sign up modal component
 */
function setup() {
  return shallow(<SignUpModal />,
  { context: { router: { push: () => {} } } });
}

describe('<SignUpModal />', () => {
  it('should contain an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Sign Up');
  });

  it('should contain an <h6 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').length).toBe(1);
    expect(wrapper.find('h6').text()).toEqual('* Note that all fields are required *');
  });

  it('should render <form /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should render the <input /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(5);
  });

  it('should render <label /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('label').length).toBe(5);
  });

  it('should render <button /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(2);
  });
});
