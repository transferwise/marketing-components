import * as React from 'react';
import Types from 'prop-types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring/web.cjs';
import { Cross as CrossIcon } from '@transferwise/icons';

import './VideoModal.css';

const AnimatedDialogOverlay = animated(DialogOverlay);
const AnimatedDialogContent = animated(DialogContent);

function VideoModalBody({
  style,
  isVisible,
  children,
  onDismiss,
  posterUrl,
  translations,
  ...rest
}) {
  return (
    <AnimatedDialogOverlay
      style={{ opacity: style.opacity }}
      onDismiss={onDismiss}
      className="twmc-video-modal__overlay"
    >
      <AnimatedDialogContent
        {...rest}
        style={{
          transform: style.scale.interpolate((value) => `translate(-50%, -50%) scale(${value})`),
        }}
        className="twmc-video-modal__content"
      >
        <button
          className="twmc-video-modal__close-button"
          type="button"
          onClick={onDismiss}
          aria-label={translations.close.ariaLabel}
        >
          <CrossIcon size="24" />
        </button>
        <img className="twmc-video-modal__poster" src={posterUrl} alt={translations.poster.alt} />
        {isVisible && children}
      </AnimatedDialogContent>
    </AnimatedDialogOverlay>
  );
}

VideoModalBody.propTypes = {
  translations: Types.shape({
    close: Types.shape({
      ariaLabel: Types.string.isRequired,
    }),
    poster: Types.shape({
      alt: Types.string.isRequired,
    }),
  }).isRequired,
  posterUrl: Types.string.isRequired,
  children: Types.node.isRequired,
  onDismiss: Types.func.isRequired,
  isVisible: Types.bool.isRequired,
  style: Types.shape({
    /* eslint-disable react/forbid-prop-types */
    opacity: Types.any,
    scale: Types.any,
  }).isRequired,
};

const VideoModal = (props) => {
  const { isOpen, title, posterUrl, onDismiss, children, translations, ...rest } = props;
  const [hasAnimatedIn, setAnimatedIn] = React.useState(false);
  const transition = useTransition(isOpen, null, {
    from: { opacity: 0, scale: 0.75 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.75 },
    onRest: (nextHasAnimatedIn) => setAnimatedIn(nextHasAnimatedIn),
  });

  return transition.map(
    ({ item, key, props: style }) =>
      item && (
        <VideoModalBody
          {...rest}
          key={key}
          translations={translations}
          posterUrl={posterUrl}
          style={style}
          isVisible={hasAnimatedIn}
          onDismiss={onDismiss}
        >
          {children}
        </VideoModalBody>
      ),
  );
};

VideoModal.propTypes = {
  isOpen: Types.bool,
  posterUrl: Types.string.isRequired,
  onDismiss: Types.func.isRequired,
  children: Types.node.isRequired,
  translations: Types.shape({
    close: Types.shape({
      ariaLabel: Types.string.isRequired,
    }),
    poster: Types.shape({
      alt: Types.string.isRequired,
    }),
  }).isRequired,
};

VideoModal.defaultProps = {
  isOpen: false,
};

export default VideoModal;
