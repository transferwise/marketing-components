import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TrustElement from './TrustElement';

describe('Trust Element', () => {
  it('should not add the animate css initially', () => {
    const { getByTestId } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        shouldAnimate
      />,
    );

    expect(getByTestId('trust-element-container').className).not.toContain(
      'tw-trust-element-animate',
    );
  });

  it('should add the animate css on mouse enter event', () => {
    const { getByTestId } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        shouldAnimate
      />,
    );

    const containerDiv = getByTestId('trust-element-container');

    expect(containerDiv.className).not.toContain('tw-trust-element-animate');

    fireEvent.mouseEnter(containerDiv);

    expect(containerDiv.className).toContain('tw-trust-element-animate');
  });

  it('should add the animate css on focus', () => {
    const { getByTestId, getByText } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        href="href"
        shouldAnimate
      />,
    );

    const containerDiv = getByTestId('trust-element-container');
    const link = getByText('linkText');

    expect(containerDiv.className).not.toContain('tw-trust-element-animate');

    fireEvent.focus(link);

    expect(containerDiv.className).toContain('tw-trust-element-animate');
  });

  it('does not create cta when href is not passed', () => {
    const { queryByText } = render(
      <TrustElement src="SampleSvg" alt="fcaAltText" title="title" linkText="linkText" />,
    );

    expect(queryByText('linkText')).toBeNull();
  });

  it('does not create cta when linkText is not passed', () => {
    const { container } = render(
      <TrustElement src="SampleSvg" alt="fcaAltText" title="title" href="href" />,
    );
    expect(container.querySelector('a')).toBeNull();
  });

  it('creates cta when both href and linkText are passed', () => {
    const { queryByText } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        href="href"
      />,
    );

    expect(queryByText('linkText')).toBeInTheDocument();
  });

  it('Sets the target to _self in case of a # href', () => {
    const { queryByText } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        href="#some-id"
      />,
    );

    expect(queryByText('linkText').target).toBe('_self');
  });

  it('Sets the target to _blank in case of a different href', () => {
    const { queryByText } = render(
      <TrustElement
        src="SampleSvg"
        alt="fcaAltText"
        title="title"
        linkText="linkText"
        href="http://google.com"
      />,
    );

    expect(queryByText('linkText').target).toBe('_blank');
  });
});
