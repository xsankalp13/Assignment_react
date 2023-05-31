import React from 'react'

import { dropDown,menu,doc,house, search, bell, profile } from '../assets'

const Navbar = () => {
  return (
    <div className='shadow-md rounded-md'>
    <div className='flex justify-between max-w-[90%] mx-auto py-3'>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <h3>
          Educator
          </h3>
          <img src={dropDown} width={8} height={8}/>
        </div>
        <div>
          <p className=' text-sm text-gray-500'>
          Arthshala
          </p>
        </div>
      </div>


      <div className='flex gap-20'>
        <div className='flex flex-col justify-center gap-1 mt-2'>
          <div className=' flex items-center gap-2 '>
            <img src={menu}/>
            <h3>Planning</h3>
          </div>
          <div className='h-[3px] bg-blue-700 rounded-full'></div>
        </div>

        <div className='flex items-center gap-2 '>
          <img src={doc}/>
          <h3>Documentation</h3>
        </div>

        <div className='flex items-center gap-2 '>
          <img src={house}/>
          <h3>Housekeeping</h3>
        </div>
      </div>

      <div className='flex gap-8 '>
        <img src={search} width={26} height={26} />
        <img src={bell} width={26} height={26}/>
        <div className='flex gap-2'>
          <img src={profile}/>
          <img src={dropDown} width={12} height={12}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar