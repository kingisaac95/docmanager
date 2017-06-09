import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from '../../client/components/App';

/**
 * @function
 * @returns {jsx} - app component
 */
function setup() {
  return shallow(<App />);
}

describe('<App />', () => {
  it('should render two <div /> elements', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
  });
});
