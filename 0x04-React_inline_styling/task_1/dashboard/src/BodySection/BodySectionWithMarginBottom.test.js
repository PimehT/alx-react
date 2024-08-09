import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe('<BodySectionWithMarginBottom />', () => {
  it('renders the BodySection correctly', () => {
    const body = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(body.find(BodySection)).toHaveLength(1);
    expect(body.find(BodySection).prop('title')).toEqual('test title');
    expect(body.find(BodySection).contains(<p>test children node</p>)).toBe(true);
  })
})
