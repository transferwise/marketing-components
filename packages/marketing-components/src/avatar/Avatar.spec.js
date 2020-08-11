import React from 'react';
import { render } from '@testing-library/react';

import Avatar from './';

describe('Avatar', () => {
  it('renders a medium sized thumbnail Avatar with NO outline', () => {
    const { getByText } = render(
      <Avatar>
        <span role="img" aria-label="Person with sunglasses emoji">
          😎
        </span>
      </Avatar>,
    );

    expect(getByText('😎').parentElement.parentElement).toHaveClass(
      'avatar avatar--thumbnail avatar--md',
    );
  });
});
