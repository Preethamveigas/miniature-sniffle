import React from 'react';
import clsx from 'clsx';

export default React.forwardRef(
  ({ children, onClick, size, rounded, rest }, ref) => (
    <button
      ref={ref}
      type="submit"
      className={clsx(
        `${size || 'w-full'}`,
        `px-3 py-4 
         text-white 
        bg-primary
        ${rounded || 'rounded-md'}
        shadow-lg
        hover:bg-primary-light 
        focus:bg-primary-light 
        focus:outline-none`,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  ),
);
