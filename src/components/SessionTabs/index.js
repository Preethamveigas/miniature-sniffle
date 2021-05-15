
import { useEffect, useState } from 'react'
import clsx from 'clsx'
export default ({ active, handleFilter }) => {
    const [s, set] = useState()
    useEffect(() => { console.log(s, 'as') }, [s])
    return (
        <ul className="list-none flex justify-between mt-4 mb-4">
            <li className={clsx("flex items-center text-center px-2 py-1 text-gray-300 text-base whitespace-nowrap",
                `${active === 'x001' && 'text-primary border-b-2 border-solid border-primary'}`,
                `lg:text-lg lg:px-3 lg:py-3`,
            )}
                onClick={() => {
                    handleFilter('x001')
                    set('xxx')
                }}
            >
                <a className="cursor-pointer font-semibold hover:text-black">Unresponded</a></li>
            <li className={clsx("flex items-center text-center px-2 py-3 text-gray-300 text-base whitespace-nowrap",
                active !== 'x001' && 'text-primary border-b-2 border-solid border-primary',
                `lg:text-lg lg:px-3 lg:py-3`,
            )}
                onClick={() => handleFilter('x002')}
            >
                <a className="cursor-pointer font-medium break-normal hover:text-black">{
                    active === 'x001' || active === 'x002' ? 'All Chats' : active === 'x003' ? 'Live Chats' : active === 'x004' ? 'Closed Chats' : 'All Chats'
                }</a></li>
        </ul>
    )
}