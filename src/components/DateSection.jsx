import React, { useState } from 'react'
import Button from './Button'
import AddPeriod from './AddPeriod';

const DateSection = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className='flex max-w-[90%] mx-auto justify-between py-6 mb-4'>  
            <div className='flex gap-4 items-center'>
                <h2 className='font-bold text-xl '>April 10-17</h2>
                {/* <p className='text-lg'>&#60;</p> */}
                <p className='text-lg'> &#60; Today &#62;</p>
                {/* <p className='text-lg'>&#62;</p> */}
            </div>
            <div onClick={() => setIsOpen(true)}>
                <Button/>
            </div>
        </div>
        {isOpen && <AddPeriod closeModal = {setIsOpen}/>}
    </div>
  )
}

export default DateSection