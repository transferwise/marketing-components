import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import './Avatar.css';

const Avatar = ({ type, children, outlined, backgroundColor, className }) => (
  <div
    className={classnames('avatar', className, `avatar--${type}`, {
      'avatar--outlined': outlined,
    })}
  >
    <div className="avatar__content" style={{ backgroundColor: backgroundColor || undefined }}>
      {children}
    </div>
  </div>
);

Avatar.Type = {
  THUMBNAIL: 'thumbnail',
  ICON: 'icon',
  EMOJI: 'emoji',
  INITIALS: 'initials',
};

Avatar.propTypes = {
  type: Types.oneOf([
    Avatar.Type.THUMBNAIL,
    Avatar.Type.ICON,
    Avatar.Type.EMOJI,
    Avatar.Type.INITIALS,
  ]),
  children: Types.node,
  outlined: Types.bool,

  backgroundColor: Types.string,
  className: Types.string,
};

Avatar.defaultProps = {
  type: Avatar.Type.THUMBNAIL,
  outlined: false,
  backgroundColor: null,
  className: null,
  children: null,
};

export default Avatar;
