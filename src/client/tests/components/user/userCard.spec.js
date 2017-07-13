import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import UserCard from '../../../components/user/UserCard';

const props = {
  user: {
    id: 1,
    name: '',
    username: '',
    email: '',
    Role: {
      title: ''
    }
  }
};

/**
 * @function
 * @returns {jsx} - document card component
 */
function setup() {
  return shallow(<UserCard {...props} />);
}

describe('<DocumentCard />', () => {
  it('should have <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('should have <h6 /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').length).toBe(4);
  });

  it('contains span elements', () => {
    const wrapper = setup();
    expect(wrapper.find('span').length).toBe(4);
  });
});
