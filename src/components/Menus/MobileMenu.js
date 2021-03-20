import React from 'react';
import MenuContent from './MobileMenuContent';

export default () => {
  const [open, set] = React.useState(null);
  return (
    <>
      <div className="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          onClick={() => {
            set((d) => !d);
          }}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {open ? <MenuContent open={open} set={set} /> : null}
    </>
  );
};
