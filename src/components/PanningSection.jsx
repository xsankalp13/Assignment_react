import React from 'react'
import { search } from '../assets'

const PanningSection = () => {
  return (
    <div className='max-w-[90%] flex justify-between mx-auto mt-8 border-b pb-4'>
        <div className='flex gap-5'>
          <p className=' text-gray-600 text-lg p-4'>Project Planning</p>
          <p className=' font-bold text-lg bg-[#E5E8FF] rounded-lg p-4'>Weekly Planning</p>
          <p className=' text-gray-600 text-lg p-4'>Planning Insights</p>
        </div>
        <div className='flex border rounded-full gap-4 p-4'>
            <button>
              <img src={search}/>
            </button>
            <input type='text' placeholder='Search' className='outline-none w-[300px]'/>
        </div>
    </div>
  )
}

export default PanningSection