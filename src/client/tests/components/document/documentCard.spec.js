import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import DocumentCard from '../../../components/document/DocumentCard';

const props = {
  document: {
    id: 1,
    title: '',
    content: '',
    User: {
      name: ''
    }
  }
};

/**
 * @function
 * @returns {jsx} - document card component
 */
function setup() {
  return shallow(<DocumentCard {...props} />);
}

describe('<DocumentCard />', () => {
  it('should have h6 elements', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').length).toBe(2);
  });

  it('should have one Link router element in render', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('contains span elements', () => {
    const wrapper = setup();
    expect(wrapper.find('span').length).toBe(1);
  });
});
