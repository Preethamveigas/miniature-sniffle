import React from 'react';
import clsx from 'clsx';

export default React.forwardRef(
  ({ children, onClick, rest }, ref) => (
    <button
      ref={ref}
      type="submit"
      className={clsx(
        `w-full 
        px-3 py-4 
        text-white 
        bg-primary
        rounded-md 
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
