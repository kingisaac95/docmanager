import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import DocumentSingleView from '../../../components/document/DocumentSingleView';

const props = {
  params: {
    id: 1
  }
};

/**
 * @function
 * @returns {jsx} - document single view component
 */
function setup() {
  return mount(<DocumentSingleView {...props} />);
}
describe('<DocumentSingleView />', () => {
  it('should have an <h6 /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').length).toBe(1);
  });

  it('should have an <hr /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('hr').length).toBe(1);
  });

  it('should have an <span /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('span').length).toBe(4);
  });

  it('should have div elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });
});
