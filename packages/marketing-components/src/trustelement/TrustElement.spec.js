import React from 'react';
import { shallow } from 'enzyme';

import TrustElement from './TrustElement';
import TrustpilotIllustration from './TrustpilotIllustration';
import mitsuiIllustration from './mitsui.svg';

describe('Trust Element', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <TrustElement
        src={<TrustpilotIllustration />}
        alt="i.am.alt"
        title="i.am.title"
        subtitle="i.am.subtitle"
        url="i.am.url"
      />,
    );
  });

  it('renders illustration component when component is passed to src', () => {
    expect(component.find(TrustpilotIllustration).exists()).toBe(true);
  });

  it('renders illustration image when image is passed to src', () => {
    component.setProps({ src: mitsuiIllustration });

    expect(component.find('img').exists()).toBe(true);
    expect(component.find('img').prop('src')).toBe(mitsuiIllustration);
  });

  it('does not animate by default', () => {
    expect(isAnimating()).toBe(false);
  });

  it('starts animating when mouse enters', () => {
    expect(isAnimating()).toBe(false);
    component.simulate('mouseEnter');

    expect(isAnimating()).toBe(true);
  });

  it('ends animation on onAnimationEnd', () => {
    component.setState({ isAnimating: true });
    component.simulate('animationEnd');

    expect(isAnimating()).toBe(false);
  });

  it('has animation class when animating', () => {
    expect(component.find('.tw-trust-element-animate').exists()).not.toBe(true);
    component.setState({ isAnimating: true });

    expect(component.find('.tw-trust-element-animate').exists()).toBe(true);
  });

  it('starts animation when cta is focused', () => {
    expect(isAnimating()).toBe(false);
    cta().simulate('focus');

    expect(isAnimating()).toBe(true);
  });

  it('does not create cta when url is not passed', () => {
    component.setProps({ url: undefined });
    expect(cta().exists()).not.toBe(true);
  });

  it('does not create cta when subtitle is not passed', () => {
    component.setProps({ subtitle: undefined });
    expect(cta().exists()).not.toBe(true);
  });

  function cta() {
    return component.find('a');
  }
  function isAnimating() {
    return component.state('isAnimating');
  }
});
