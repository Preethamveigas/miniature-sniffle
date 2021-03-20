import clx from 'clsx';
import Menu from '@/components/Menus/MenuItems';
import Logout from '@/components/Menus/Logout';

export default ({ open, set }) => (
  <div
    className={clx(
      `absolute top-0 inset-x-0 p-2 ${
        open ? 'transition transform origin-top-right' : ''
      } md:hidden`,
    )}
  >
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <div className="-mr-2">
            <button
              onClick={() => set((d) => !d)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <Menu />
          </nav>
          <Logout />
        </div>
      </div>
    </div>
  </div>
);
