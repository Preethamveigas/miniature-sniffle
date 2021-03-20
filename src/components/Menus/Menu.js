import { Link } from '@/components/common';

export default ({ item, visible = true }) => {
  if (!visible) return null;
  return (
    <button
      type="button"
      className="text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-expanded="false"
    >
      <Link to={`/${item.toLowerCase()}`}>
        <span className="font-medium">{item}</span>
      </Link>
    </button>
  );
};
