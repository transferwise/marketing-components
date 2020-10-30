import * as React from 'react';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import createMockRaf from 'mock-raf';
import { Globals } from 'react-spring';
import { hasValidConsent } from '@transferwise/cookie-consent';

import YouTubeVideoModal from './';

jest.mock('@transferwise/cookie-consent', () => ({
  hasValidConsent: jest.fn(),
}));

const Translations = {
  title: 'Video',
  close: {
    ariaLabel: 'Close',
  },
  poster: {
    alt: 'Poster',
  },
};

describe('YouTubeVideoModal', () => {
  it('renders the fallback poster', () => {
    hasValidConsent.mockReturnValue(true);

    const { getByAltText } = render(
      <YouTubeVideoModal
        translations={Translations}
        videoId="dQw4w9WgXcQ"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </YouTubeVideoModal>,
    );

    const poster = getByAltText(/poster/i);

    expect(poster.src).toBe('https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg');
  });

  it('renders given poster', () => {
    hasValidConsent.mockReturnValue(true);

    const { getByAltText } = render(
      <YouTubeVideoModal
        translations={Translations}
        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/customer_support-b76c1fb78a1a6239725688ae629ee3e7.jpg"
        videoId="dQw4w9WgXcQ"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </YouTubeVideoModal>,
    );

    const poster = getByAltText(/poster/i);

    expect(poster.src).toBe(
      'https://transferwise.com/staticrab/homepage/_next/static/images/customer_support-b76c1fb78a1a6239725688ae629ee3e7.jpg',
    );
  });

  it('renders the YouTube video if we have cookie consent', () => {
    hasValidConsent.mockReturnValue(true);
    const mockRaf = createMockRaf();

    Globals.injectFrame(mockRaf.raf, mockRaf.cancel);
    Globals.injectNow(mockRaf.now);

    const { getByTitle } = render(
      <YouTubeVideoModal
        translations={Translations}
        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/customer_support-b76c1fb78a1a6239725688ae629ee3e7.jpg"
        videoId="dQw4w9WgXcQ"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </YouTubeVideoModal>,
    );

    act(() => {
      mockRaf.step({ count: 48 });
    });

    const video = getByTitle(/video/i);

    expect(video.src).toBe(
      'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1&wmode=opaque',
    );
  });

  it('opens YouTube video on other tab if we do not have cookie consent', () => {
    hasValidConsent.mockReturnValue(false);
    Object.defineProperty(window, 'open', { value: jest.fn(), writable: true });

    expect(window.open).not.toHaveBeenCalled();

    const { getByAltText } = render(
      <YouTubeVideoModal
        translations={Translations}
        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/customer_support-b76c1fb78a1a6239725688ae629ee3e7.jpg"
        videoId="dQw4w9WgXcQ"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </YouTubeVideoModal>,
    );

    expect(() => getByAltText(/poster/i)).toThrow();
    expect(window.open).toHaveBeenCalledWith(`https://youtu.be/dQw4w9WgXcQ`, '_blank');
  });
});
