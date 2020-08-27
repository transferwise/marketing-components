import * as React from 'react';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import createMockRaf from 'mock-raf';
import { Globals } from 'react-spring';

import VideoModal from './';

const Translations = {
  close: {
    ariaLabel: 'Close',
  },
  poster: {
    alt: 'Poster',
  },
};

describe('VideoModal', () => {
  it('renders', () => {
    expect(() =>
      render(
        <VideoModal
          translations={Translations}
          posterUrl="img"
          onDismiss={() => {}}
          aria-labelledby="#elm"
        >
          children
        </VideoModal>,
      ),
    ).not.toThrow();
  });

  it('renders nothing by default', () => {
    const { container } = render(
      <VideoModal
        translations={Translations}
        posterUrl="img"
        onDismiss={() => {}}
        aria-labelledby="#elm"
      >
        children
      </VideoModal>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('renders the poster while the modal is animating in', () => {
    const { getByAltText } = render(
      <VideoModal
        translations={Translations}
        posterUrl="img"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </VideoModal>,
    );

    expect(getByAltText(/poster/i)).toBeInTheDocument();
  });

  it('renders children when the animation has finished', () => {
    const mockRaf = createMockRaf();

    Globals.injectFrame(mockRaf.raf, mockRaf.cancel);
    Globals.injectNow(mockRaf.now);

    const { getByText } = render(
      <VideoModal
        translations={Translations}
        posterUrl="img"
        onDismiss={() => {}}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </VideoModal>,
    );

    expect(() => getByText(/children/i)).toThrow();

    act(() => {
      mockRaf.step({ count: 48 });
    });

    expect(getByText(/children/i)).toBeVisible();
  });

  it('clicking the dismiss button fires the `onDismiss` callback', () => {
    const mockRaf = createMockRaf();
    const onDismiss = jest.fn();

    Globals.injectFrame(mockRaf.raf, mockRaf.cancel);
    Globals.injectNow(mockRaf.now);

    const { getByLabelText } = render(
      <VideoModal
        translations={Translations}
        posterUrl="img"
        onDismiss={onDismiss}
        aria-labelledby="#elm"
        isOpen
      >
        <span>children</span>
      </VideoModal>,
    );

    act(() => {
      mockRaf.step({ count: 48 });
    });

    expect(onDismiss).toBeCalledTimes(0);

    const closeButton = getByLabelText(/close/i);
    userEvent.click(closeButton);

    expect(onDismiss).toBeCalledTimes(1);
  });
});
