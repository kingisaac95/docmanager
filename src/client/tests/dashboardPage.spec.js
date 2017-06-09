import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../client/components/DashboardPage';

const props = {
  documents: {
    totalCount: ''
  },
  quote: {
    quote: '',
    author: ''
  },
  loadUserDocuments: (() => {}),
  loadQuote: (() => {}),
};

/**
 * @function
 * @returns {jsx} - document page component
 */
function setup() {
  return shallow(<DashboardPage {...props} />);
}


describe('<DashboardPage />', () => {
  it('should have <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('should have a <h4 /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('h4').text()).toEqual('Dashboard');
  });

  it('should have a <p /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('p').length).toBe(7);
  });

  it('should have a <i /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('i').length).toBe(1);
  });

  it('should have a <hr /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('hr').length).toBe(1);
  });

  it('should have a <Link /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(4);
  });
});
