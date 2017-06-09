import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { DashboardNavbar } from '../../../components/common/DashboardNavbar';

const props = {
  logout: (() => {}),
};

/**
 * @function
 * @returns {jsx} - dashboard navbar page component
 */
function setup() {
  return shallow(<DashboardNavbar {...props} />);
}


describe('<DashboardNavbar />', () => {
  it('should have <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(6);
  });

  it('should have a <nav /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('should have a <form /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should render the <input /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render <label /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('label').length).toBe(1);
  });

  it('should have an <ul /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('ul').length).toBe(2);
  });

  it('should have an <li /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).toBe(9);
  });

  it('should have an <i /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('i').length).toBe(11);
  });

  it('should have an <Link /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('Link').length).toBe(10);
  });

  it('should have an <img /> element', () => {
    const wrapper = setup();
    expect(wrapper.find('img').length).toBe(1);
  });
});
