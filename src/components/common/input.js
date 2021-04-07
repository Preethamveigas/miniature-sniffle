import React from 'react';
import clsx from 'clsx'

export default React.forwardRef(({ placeholder, bg, name, round, border }, ref) => (
  <input
    ref={ref}
    name={name}
    placeholder={placeholder}
    className={clsx(`w-full px-3 py-2
    placeholder-gray-300
    ${border || 'border border-gray-300'}
    ${round || 'rounded-md'}
    ${bg}
    focus:outline-none
    focus:ring
    focus:ring-indigo-100
    focus:border-indigo-300
    dark:bg-gray-700
    dark:text-white
    dark:placeholder-gray-500
    dark:border-gray-600
    dark:focus:ring-gray-900
    dark:focus:border-gray-500`)}
  />
));
