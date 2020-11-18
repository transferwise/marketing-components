import * as React from 'react';
import classnames from 'classnames';
import Types from 'prop-types';
import { Chevron as ChevronIcon } from '@transferwise/components';

import './ClosableBlock.css';

const useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export default function ContentBlock(props) {
  const { src, heading, body, headingLevel: HeadingComponent } = props;
  const [isOpen, setOpen] = React.useState(false);
  const [focusable, setFocusable] = React.useState(false);

  React.useEffect(() => {
    function handleMediaMatchChange(event) {
      if (event.matches) {
        setOpen(true);
        setFocusable(false);
      } else {
        setOpen(false);
        setFocusable(true);
      }
    }

    const mediaQuery = window.matchMedia('(min-width: 576px)');
    mediaQuery.addListener(handleMediaMatchChange);

    return () => mediaQuery.removeListener(handleMediaMatchChange);
  }, []);

  useIsomorphicEffect(() => {
    const { matches } = window.matchMedia('(min-width: 576px)');
    setFocusable(!matches);
    setOpen(matches);
  }, []);

  function getDynamicProps() {
    if (!focusable) {
      return {};
    } else {
      return {
        type: 'button',
        onClick: () => setOpen(!isOpen),
        'aria-expanded': isOpen,
      };
    }
  }

  const Component = !focusable ? 'div' : 'button';
  return (
    <Component
      className={classnames('tw-contentBlock', {
        'tw-contentBlock--open': isOpen,
      })}
      {...getDynamicProps()}
    >
      <div className="tw-contentBlock__image">
        <img src={src} alt="" />
      </div>
      <div className="tw-contentBlock__content">
        <HeadingComponent className="tw-contentBlock__content__heading h4">
          {heading}
        </HeadingComponent>
        <p
          className="tw-contentBlock__content__body m-b-0 m-t-2"
          hidden={isOpen ? undefined : 'hidden'}
        >
          {body}
        </p>
      </div>
      <div className="tw-contentBlock__chevron">
        <ChevronIcon size={ChevronIcon.Size.EXTRA_SMALL} />
      </div>
    </Component>
  );
}

ContentBlock.propTypes = {
  src: Types.string.isRequired,
  heading: Types.node.isRequired,
  headingLevel: Types.oneOf(['h2', 'h3', 'h4', 'h5']).isRequired,
  body: Types.node.isRequired,
};
