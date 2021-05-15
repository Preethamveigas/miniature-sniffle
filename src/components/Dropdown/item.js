export default ({ children, ...rest }) => (
  <a
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
    role="menuitem"
    {...rest}
   >
    {children}
  </a>
);
