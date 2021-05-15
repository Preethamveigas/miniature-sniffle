import { forwardRef } from 'react'
export default forwardRef(({ children }, ref) => (
  <div ref={ref} className="mx-auto app-header flex w-full">
    <div className="w-full flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
      {children}
    </div>
  </div>
));
