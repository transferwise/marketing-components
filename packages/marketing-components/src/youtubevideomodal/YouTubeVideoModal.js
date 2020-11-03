import React from 'react';
import Types from 'prop-types';
import { hasValidConsent } from '@transferwise/cookie-consent';

import VideoModal from '../videomodal';

const YouTubeVideoModal = ({ videoId, posterUrl, translations, isOpen, onDismiss, ...rest }) => {
  const posterFallbackUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1&wmode=opaque`;

  React.useEffect(() => {
    if (isOpen && !hasValidConsent() && typeof window !== 'undefined') {
      window.open(`https://youtu.be/${videoId}`, '_blank');
      onDismiss();
    }
  }, [isOpen]);

  if (!hasValidConsent()) {
    return null;
  }

  return (
    <VideoModal
      {...rest}
      posterUrl={posterUrl || posterFallbackUrl}
      translations={translations}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <iframe
        title={translations.title}
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      />
    </VideoModal>
  );
};

YouTubeVideoModal.propTypes = {
  videoId: Types.string.isRequired,
  posterUrl: Types.string,
  translations: Types.shape({
    title: Types.string.isRequired,
    close: Types.shape({
      ariaLabel: Types.string.isRequired,
    }),
    poster: Types.shape({
      alt: Types.string.isRequired,
    }),
  }).isRequired,
  onDismiss: Types.func.isRequired,
  isOpen: Types.bool,
};

YouTubeVideoModal.defaultProps = {
  posterUrl: '',
  isOpen: false,
};

export default YouTubeVideoModal;
