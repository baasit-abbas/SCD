import React from 'react'
import List from './List'

const NavBar = ({img_src,name}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center h-[10%] md:px-30 px-2'>
        <div className='flex gap-3 items-center'>
            <img className='w-10 h-10 rounded-full' src={img_src} alt="" />
            <h1 className='text-gray-800 font-bold text-xl'>{name}</h1>
        </div>
        <ul className='flex gap-5'>
            <List link='Home'/>
            <List link='About'/>
            <List link='Contact'/>
        </ul>
      
    </div>
  )
}

export default NavBar
