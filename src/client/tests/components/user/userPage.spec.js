import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { UserPage } from '../../../components/user/UserPage';

const props = {
  loadUsers: (() => {}),
};

/**
 * @function
 * @returns {jsx} - user page component
 */
function setup() {
  return shallow(<UserPage {...props} />);
}


describe('<UserPage />', () => {
  it('should have <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('should have a <ul /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should have a <li /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).toBe(1);
  });

  it('should have a <Link /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(5);
  });

  it('should have an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').text()).toEqual('Users');
  });
});
