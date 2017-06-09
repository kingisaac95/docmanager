import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { AddDocumentModal } from '../../../components/modals/AddDocumentModal';

/**
 * @function
 * @returns {jsx} - add document modal component
 */
function setup() {
  return shallow(<AddDocumentModal />);
}
describe('<AddDocumentModal />', () => {
  it('should have an <h5 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h5').length).toBe(1);
    expect(wrapper.find('h5').text()).toEqual('Add New Document');
  });

  it('should have an <h6 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').length).toBe(1);
    expect(wrapper.find('h6').text()).toEqual('* Note that all fields are required *');
  });

  it('should have div elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('contains a <TinyMCE /> component', () => {
    const wrapper = setup();
    expect(wrapper.find('TinyMCE').length).toBe(1);
  });

  it('should have an <form /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should have an <a /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should have an <i /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('i').length).toBe(1);
  });

  it('should have an <button /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should have an <select /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('select').length).toBe(1);
  });

  it('should have an <option /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('option').length).toBe(3);
  });
  it('should have an <label /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('label').length).toBe(2);
  });
});
