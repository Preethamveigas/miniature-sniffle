import Logout from '@/components/Menus/Logout';

export default () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <a
      href="#"
      className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-gray-900"
    >
      Profile
    </a>
    {/* <a
        href="#"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Logout
      </a> */}

    <Logout />
  </div>
);
