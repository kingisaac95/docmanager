import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MakeAdminModal } from '../../../components/modals/MakeAdminModal';

const props = {
  user: {
    id: 1
  }
};

/**
 * @function
 * @returns {jsx} - delete document modal component
 */
function setup() {
  return shallow(<MakeAdminModal {...props} />);
}
describe('<DeleteDocumentModal />', () => {
  it('should have an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Are you sure you want to make this user an Admin?');
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
