import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from '../../../components/common/Footer';

/**
 * @function
 * @returns {jsx} - footer page component
 */
function setup() {
  return shallow(<Footer />);
}

describe('<Footer />', () => {
  it('should render two <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
  });

  it('should render two <a /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toBe(2);
  });

  it('should render a <footer /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('footer').length).toBe(1);
  });
});
