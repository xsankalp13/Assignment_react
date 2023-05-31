import React from 'react'
import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";
const Button = () => {
  return (
    <div className='bg-[#5364FF] rounded-full flex gap-3 py-2 px-6 items-center cursor-pointer'>

      <IconContext.Provider value={{ color: "white" }}>
        <div>
          <IoIosAddCircle size={20}/>
        </div>
      </IconContext.Provider>
      <p className='text-white text-lg'>Add Period</p>
    </div>
  )
}

export default Button