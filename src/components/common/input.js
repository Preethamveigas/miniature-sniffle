import React from 'react';

export default React.forwardRef(({ placeholder, name }, ref) => (
  <input
    ref={ref}
    name={name}
    placeholder={placeholder}
    className="w-full px-3 py-2
      placeholder-gray-300
      border border-gray-300
      rounded-md
      focus:outline-none
      focus:ring
      focus:ring-indigo-100
      focus:border-indigo-300
      dark:bg-gray-700
      dark:text-white
      dark:placeholder-gray-500
      dark:border-gray-600
      dark:focus:ring-gray-900
      dark:focus:border-gray-500"
  />
));