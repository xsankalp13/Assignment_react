import React from 'react'
import { cross } from '../assets'
import Button from './Button'
const AddPeriod = ({ closeModal }) => {
  return (
    <>

      <div className='w-[60%] mx-auto bg-white rounded-2xl py-2 absolute right-0 left-0 top-0 bottom-0 pt-5  z-50'>
        <div className='w-[90%] mx-auto'>
            <div>
              <div className='flex justify-between py-4'>
                <h2 className=' text-xl font-bold'>Add Period</h2>
                <img src={cross} onClick={() => closeModal(false)} className=' cursor-pointer'/>
              </div>
            </div>
            <div className='flex flex-col py-4'>
              <label htmlFor='periodName' className='text-lg font-bold pb-2'>Period Name</label>
              <input type='text' placeholder='Enter Period Name' id='periodName' className=' text-xl outline-none border border-gray-500 rounded-xl p-4 '/>
            </div>
            
            <div className='flex justify-between py-4 gap-6'>
              <div className='flex flex-col flex-1'>
                <p className='text-lg font-bold pb-2'>Start Time</p>
                <div className='text-xl outline-none border border-gray-500 rounded-xl p-4'>
                  <p>11:00</p>
                </div>
              </div> 
              <div className='flex flex-col flex-1'>
                <p className='text-lg font-bold pb-2'>Start Time</p>
                <div className='text-xl outline-none border border-gray-500 rounded-xl p-4'>
                  <p>11:00</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col py-4'>
              <p className='text-lg font-bold pb-2'>Repeat Days</p>
              <div className='flex gap-3 py-2 '>
                <div className='w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center'>S</div>
                <div className='w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center'>M</div>
                <div className='w-[40px] h-[40px] rounded-full bg-blue-700 flex justify-center items-center text-white'>T</div>
                <div className='w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center'>W</div>
                <div className='w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center'>T</div>
                <div className='w-[40px] h-[40px] rounded-full bg-blue-700 flex justify-center items-center text-white'>F</div>
                <div className='w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center'>S</div>

              </div>
            </div>

            <div className='flex flex-col py-4'>
              <p className='text-lg font-bold pb-2'>From</p>
              <div className='text-xl outline-none border border-gray-500 rounded-xl p-4'>
                <p>27 March - 28 March, 2023</p>
              </div>
            </div>

            <div className='flex justify-between py-4'>
              <div className='flex gap-3'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#F8EBF1] flex justify-center items-center'>S</div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#E9E8FD] flex justify-center items-center'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#FFFBDA] flex justify-center items-center'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#CFFFF1] flex justify-center items-center'></div>
              </div>
              <div>
                <Button/>
              </div>
            </div>


          </div>
        </div>
        <div className='w-[100%] bg-[rgba(0,0,0,0.1)] py-2 absolute right-0 left-0 top-0 bottom-0 pt-5 z-40 ' onClick={() => closeModal(false)}>
        </div>
      </>
  )
}

export default AddPeriod