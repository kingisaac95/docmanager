import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SignInForm from '../../../components/home/SignInForm';
import SignUpModal from '../../../components/modals/SignUpModal';
import { HomePage } from '../../../components/home/HomePage';

/**
 * @function
 * @returns {jsx} - hompage component
 */
function setup() {
  return shallow(<HomePage />);
}

describe('<HomePage />', () => {
  it('contains a <SignInForm /> component', () => {
    const wrapper = setup();
    expect(wrapper.find(SignInForm).length).toBe(1);
  });

  it('contains a <SignUpModal /> component', () => {
    const wrapper = setup();
    expect(wrapper.find(SignUpModal).length).toBe(1);
  });

  it('should have an h4', () => {
    const wrapper = setup();
    expect(wrapper.find('h4').text()).toEqual('Create and manage your documents.');
  });

  it('should have an h6', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').text()).toEqual('See what others are up to!');
  });
});
