import React from 'react';
import { mount } from 'enzyme';
import SimpleComposer from './SimpleComposer';

describe('SimpleComposer', () => {
  it('Inital text string should be: Init Text', () => {
    const wrapper = mount(<SimpleComposer/>);
    const text = wrapper.find('p');
    expect(text.text()).toBe('Init Text');
  });
  it('Updated text string should be: Updated Text', () => {
    const wrapper = mount(<SimpleComposer/>);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('p').text()).toBe('Updated Text');
  });
});