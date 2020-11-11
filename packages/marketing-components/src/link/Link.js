import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Chevron } from '@transferwise/components';

import './Link.css';

export default function Link(props) {
  const { className, href, children, ...rest } = props;

  return (
    <a {...rest} className={classNames('tw-link-with-chevron', className)} href={href}>
      {children}
      <Chevron size={Chevron.Size.EXTRA_SMALL} orientation={Chevron.Orientation.RIGHT} />
    </a>
  );
}

Link.propTypes = {
  href: Types.string.isRequired,
  children: Types.node.isRequired,
  className: Types.string,
};
