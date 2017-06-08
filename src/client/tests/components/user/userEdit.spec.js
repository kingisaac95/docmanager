import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { UserEdit } from '../../../components/user/UserEdit';

const props = {
  user: {
    name: '',
    username: '',
    email: '',
    password: '',
    roleId: 1,
  }
};

/**
 * @function
 * @returns {jsx} - user edit component
 */
function setup() {
  return shallow(<UserEdit {...props} />);
}
describe('<DocumentEdit />', () => {
  it('should have an h5 element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Edit User');
  });

  it('should have div elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('contains a <input /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(4);
  });

  it('contains a <p /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('p').length).toBe(4);
  });

  it('contains a <button /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(1);
  });
});
