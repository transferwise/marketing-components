import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './TrustElement.css';

const isAnchorUrl = (url) => url[0] === '#';

const TrustElementIllustration = ({ shouldAnimate, src, alt }) => {
  return shouldAnimate ? (
    <div className="tw-trust-element__svg_container">{src}</div>
  ) : (
    <img className="tw-trust-element__image" src={src} alt={alt} />
  );
};

TrustElementIllustration.propTypes = {
  src: Types.oneOfType([Types.element, Types.string]).isRequired,
  alt: Types.string.isRequired,
  shouldAnimate: Types.bool.isRequired,
};

const TrustElement = ({ title, alt, linkText, href, src, shouldAnimate, useIllustration }) => {
  const [isAnimating, setAnimating] = useState(false);

  function startAnimation() {
    if (shouldAnimate) {
      setAnimating(true);
    }
  }

  return (
    <div
      className={classNames('tw-trust-element callout-container text-center', {
        'tw-trust-element-animate': isAnimating,
      })}
      onAnimationEnd={() => setAnimating(false)}
      onMouseEnter={startAnimation}
      data-testid="trust-element-container"
    >
      {useIllustration && (
        <TrustElementIllustration alt={alt} src={src} shouldAnimate={shouldAnimate} />
      )}

      <div className="h4 m-t-1">{title}</div>

      {href && linkText && (
        <a
          href={href}
          target={isAnchorUrl(href) ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onFocus={() => startAnimation()}
          className="link-callout"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

TrustElement.propTypes = {
  src: Types.oneOfType([Types.element, Types.string]).isRequired,
  alt: Types.string,
  title: Types.string.isRequired,
  linkText: Types.string,
  href: Types.string,
  shouldAnimate: Types.bool,
  useIllustration: Types.bool,
};

TrustElement.defaultProps = {
  linkText: null,
  href: null,
  alt: '',
  shouldAnimate: false,
  useIllustration: true,
};

export default TrustElement;
