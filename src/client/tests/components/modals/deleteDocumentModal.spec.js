import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DeleteDocumentModal } from '../../../components/modals/DeleteDocumentModal';

const props = {
  document: {
    id: 1
  }
};

/**
 * @function
 * @returns {jsx} - delete document modal component
 */
function setup() {
  return shallow(<DeleteDocumentModal {...props} />);
}
describe('<DeleteDocumentModal />', () => {
  it('should have an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Are you sure you want to delete this document?');
  });

  it('should have div elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('should have an <button /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(2);
  });
});
