import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Navbar from '../../../components/common/Navbar';

/**
 * @function
 * @returns {jsx} - navbar page component
 */
function setup() {
  return shallow(<Navbar />);
}


describe('<Navbar />', () => {
  it('should have <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
  });

  it('should have an <Link /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('should have a <nav /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('should render the <a /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toBe(3);
  });

  it('should have an <ul /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('ul').length).toBe(2);
  });

  it('should have an <i /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('i').length).toBe(1);
  });

  it('should have an <img /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('img').length).toBe(1);
  });
});
