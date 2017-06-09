import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { SignInForm } from '../../../components/home/SignInForm';


const props = {
  username: '',
  password: '',
};

/**
 * @function
 * @returns {jsx} - hompage component
 */
function setup() {
  return mount(<SignInForm {...props} />,
  { context: { router: { push: () => {} } } });
}

describe('<SignInForm />', () => {
  it('should contain an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Sign In');
  });

  it('should render <form /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should render the <input /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(2);
  });

  it('should render <label /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('label').length).toBe(2);
  });

  it('should render <button /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(1);
  });
});
