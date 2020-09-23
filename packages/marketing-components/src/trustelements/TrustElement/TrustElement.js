import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import './TrustElement.css';

const TrustElement = ({ title, alt, linkText, href, src, shouldAnimate }) => {
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
      {shouldAnimate ? (
        <div className="tw-trust-element__svg_container">{src}</div>
      ) : (
        <img className="tw-trust-element__image" src={src} alt={alt} />
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

const isAnchorUrl = (url) => url[0] === '#';

TrustElement.propTypes = {
  src: Types.oneOfType([Types.element, Types.string]).isRequired,
  alt: Types.string,
  title: Types.string.isRequired,
  linkText: Types.string,
  href: Types.string,
  shouldAnimate: Types.bool,
};

TrustElement.defaultProps = {
  linkText: null,
  href: null,
  alt: '',
  shouldAnimate: false,
};

export default TrustElement;
