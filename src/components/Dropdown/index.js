import { useState } from 'react';

export default ({ children, icon }) => {
  const [open, set] = useState(null);
  return (
    <div className="relative inline-block text-left ml-1">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md  shadow px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup={open}
          aria-expanded={open}
          onClick={() => set((d) => !d)}
          onBlur={() => setTimeout(() => set(false), 500)}
        >
          {icon}
        </button>
      </div>

      <div
        className={`absolute ${open
            ? 'transition ease-out duration-100'
            : 'transition ease-in duration-75 hidden'
          }  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
