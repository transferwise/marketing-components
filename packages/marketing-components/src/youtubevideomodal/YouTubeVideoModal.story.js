import * as React from 'react';
import YouTubeVideoModal from './YouTubeVideoModal';

export default {
  component: YouTubeVideoModal,
  title: 'YouTubeVideoModal',
};

const Translations = {
  title: 'Video title',
  poster: {
    alt: 'Poster alt',
  },
  close: {
    ariaLabel: 'Close button',
  },
};

export const basic = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <YouTubeVideoModal
        translations={Translations}
        videoId="dQw4w9WgXcQ"
        aria-label="Example video modal"
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
      >
        Example
      </YouTubeVideoModal>
      <button onClick={() => setOpen(true)}>Open modal</button>
    </>
  );
};
