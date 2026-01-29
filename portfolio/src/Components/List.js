import React from 'react'

const List = ({link}) => {
  return (
    <div>
      <li className='text-gray-900 list-none font-bold text-lg hover:scale-[1.05] cursor-pointer'>{link}</li>
    </div>
  )
}

export default List
