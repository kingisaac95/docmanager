import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DocumentEdit } from '../../../components/document/DocumentEdit';

const props = {
  document: {
    title: '',
    access: '',
    content: '',
    UserId: '',
  }
};

/**
 * @function
 * @returns {jsx} - document edit component
 */
function setup() {
  return shallow(<DocumentEdit {...props} />);
}
describe('<DocumentEdit />', () => {
  it('should have an h5 element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Edit Document');
  });

  it('should have div elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('contains a <TinyMCE /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('TinyMCE').length).toBe(1);
  });
});
