import React, { Component } from 'react';
import Types from 'prop-types';
// import { Message } from 'retranslate';
import classNames from 'classnames';
// import './TrustElement.less';

export default class TrustElement extends Component {
  constructor(props) {
    super(props);
    this.state = { isAnimating: false };
  }

  startAnimation() {
    if (this.isAnimatedTrustElement()) {
      this.setState({ isAnimating: true });
    }
  }

  isAnimatedTrustElement() {
    const { src } = this.props;

    return typeof src === 'object';
  }

  render() {
    const { title, alt, subtitle, url, src } = this.props;
    const { isAnimating } = this.state;

    return (
      <div
        className={classNames('tw-trust-element callout-container text-center', {
          'tw-trust-element-animate': isAnimating,
        })}
        onAnimationEnd={() => this.setState({ isAnimating: false })}
        onMouseEnter={() => this.startAnimation()}
      >
        {this.isAnimatedTrustElement() ? (
          <span>{src}</span>
        ) : (
          <img className="tw-trust-element__image" src={src} alt={alt} />
        )}

        <h2 className="h4 m-t-1">{title}</h2>

        {url && subtitle && (
          <a
            href={url}
            target={isAnchorUrl(url) ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onFocus={() => this.startAnimation()}
            className="link-callout"
          >
            {subtitle}
          </a>
        )}
      </div>
    );
  }
}

const isAnchorUrl = (url) => url[0] === '#';

TrustElement.propTypes = {
  src: Types.node.isRequired,
  alt: Types.string.isRequired,
  title: Types.string.isRequired,
  subtitle: Types.string,
  url: Types.string,
};

TrustElement.defaultProps = {
  subtitle: null,
  url: null,
};
