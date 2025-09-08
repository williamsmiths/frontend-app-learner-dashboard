import React from 'react';

import useIsCollapsed from './hooks';

export const ActionButton = (props) => {
  const isSmall = useIsCollapsed();
  return (
    <button
      {...props}
      {...isSmall && { size: 'sm' }}
      variant='light'
      className="custom-explore-btn border-0"
    />
  );
};

export default ActionButton;
