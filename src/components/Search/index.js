import Search from '@/assets/icons/search.svg';
import Filter from '@/assets/icons/filter.svg';
import Sort from '@/assets/icons/sort.svg';
import Dropdown from '@/components/Dropdown';
import DpItem from '@/components/Dropdown/item';

import './search.scss';

export default ({ setSearch }) => (
  <div className="bg-white flex items-center relative">
    <Search width={20} height={20} className="search_list_icon" />
    <input
      className="w-full bg-indigo-50 bg-opacity-25 p-2 border-none pl-9 pr-14 focus:outline-none placeholder-gray-200::placeholder"
      type="text"
      placeholder="Search..."
      onChange={({ target }) => setSearch(target.value.toLowerCase())}
    />
    <div className="filters">
      <Dropdown
        icon={(
          <Filter
            width={20}
            height={20}
            className="cursor-pointer"
          />
          )}
      >
        <DpItem> Unresponded</DpItem>
        <DpItem> Unread</DpItem>
        <DpItem> Live</DpItem>
        <DpItem> Closed</DpItem>
      </Dropdown>

      <Dropdown
        icon={
          <Sort width={20} height={20} className="cursor-pointer" />
          }
      >
        <DpItem>New</DpItem>
        <DpItem>Old</DpItem>
      </Dropdown>
    </div>
  </div>
);
