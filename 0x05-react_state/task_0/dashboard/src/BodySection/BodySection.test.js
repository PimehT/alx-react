import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection title=""', () => {
  let body;

  beforeEach(() => {
    body = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
  })
  
  it('renders correctly one h2 element with correct text', () => {
    expect(body.find('h2').text()).toEqual('test title');
    expect(body.find('h2')).toHaveLength(1);
  });

  it('renders correctly one h2 element with correct text', () => {
    expect(body.find('p').text()).toEqual('test children node');
    expect(body.find('p')).toHaveLength(1);
  });
})
