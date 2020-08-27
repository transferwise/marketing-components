import React from 'react';
import Types from 'prop-types';

import VideoModal from '../videomodal';

const YouTubeVideoModal = ({ videoId, posterUrl, translations, ...rest }) => {
  const posterFallbackUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1&wmode=opaque`;

  return (
    <VideoModal {...rest} posterUrl={posterUrl || posterFallbackUrl} translations={translations}>
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
};

YouTubeVideoModal.defaultProps = {
  posterUrl: '',
};

export default YouTubeVideoModal;
