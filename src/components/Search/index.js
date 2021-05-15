import { forwardRef } from 'react'
import Filter from '@/assets/icons/filter.svg';
import Sort from '@/assets/icons/sort.svg';
import Dropdown from '@/components/Dropdown';
import DpItem from '@/components/Dropdown/item';
import './search.scss';


export default forwardRef(({ setSearch, handleFilter }, ref) => (
  <div ref={ref} className="bg-white flex items-center relative pb-4">
    <input
      className="h-12 w-full bg-indigo-50 bg-opacity-25 p-2 border-none pr-14 focus:outline-none placeholder-gray-200::placeholder"
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
            className="cursor-pointer fill-current text-primary"
          />
        )}
      >
        <DpItem onClick={() => handleFilter('x001')}> Unresponded</DpItem>
        <DpItem onClick={() => handleFilter('x002')}> All</DpItem>
        <DpItem onClick={() => handleFilter('x003')}> Live</DpItem>
        <DpItem onClick={() => handleFilter('x004')}> Closed</DpItem>
        <DpItem onClick={() => handleFilter('x005')}> Unread</DpItem>
      </Dropdown>

      <Dropdown
        icon={
          <Sort width={20} height={20} className="cursor-pointer fill-current text-primary" />
        }
      >
        <DpItem>New</DpItem>
        <DpItem>Old</DpItem>
      </Dropdown>
    </div>
  </div>
));
