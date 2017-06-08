import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DocumentPage } from '../../../components/document/DocumentPage';

const props = {
  loadDocuments: (() => {}),
};

/**
 * @function
 * @returns {jsx} - document page component
 */
function setup() {
  return shallow(<DocumentPage {...props} />);
}


describe('<DocumentPage />', () => {
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
    expect(wrapper.find('h5').text()).toEqual('Documents');
  });

  it('should have an <h6 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h6').text()).toEqual('Sorry, no documents found. Click the ( + ) to create a new document.');
  });
});
