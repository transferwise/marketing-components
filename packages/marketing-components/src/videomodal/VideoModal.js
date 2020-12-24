import * as React from 'react';
import Types from 'prop-types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Cross as CrossIcon } from '@transferwise/icons';
import { motion } from 'framer-motion';

import './VideoModal.css';

const MotionDialogOverlay = motion.custom(DialogOverlay);
const MotionDialogContent = motion.custom(DialogContent);

function VideoModalBody({
  children,
  onDismiss,
  posterUrl,
  translations,
  modalOverlayProps,
  modalContentProps,
}) {
  return (
    <MotionDialogOverlay className="twmc-video-modal__overlay" {...modalOverlayProps}>
      <MotionDialogContent className="twmc-video-modal__content" {...modalContentProps}>
        <button
          className="twmc-video-modal__close-button"
          type="button"
          onClick={onDismiss}
          aria-label={translations.close.ariaLabel}
        >
          <CrossIcon size="24" />
        </button>
        <img className="twmc-video-modal__poster" src={posterUrl} alt={translations.poster.alt} />
        {children}
      </MotionDialogContent>
    </MotionDialogOverlay>
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
  modalOverlayProps: Types.shape({}),
  modalContentProps: Types.shape({}),
};

const VideoModal = (props) => {
  const { isOpen, posterUrl, onDismiss, children, translations, ...rest } = props;

  return (
    <VideoModalBody
      {...rest}
      translations={translations}
      posterUrl={posterUrl}
      onDismiss={onDismiss}
    >
      {children}
    </VideoModalBody>
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
