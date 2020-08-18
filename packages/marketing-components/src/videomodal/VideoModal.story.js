import * as React from 'react';
import VideoModal from './VideoModal';

export default {
  component: VideoModal,
  title: 'VideoModal',
};

const Translations = {
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
      <VideoModal
        translations={Translations}
        aria-label="Example video modal"
        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/en-e09d936b919f436ff85caf38e1822030.jpg"
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
      >
        Example
      </VideoModal>
      <button onClick={() => setOpen(true)}>Open modal</button>
    </>
  );
};
