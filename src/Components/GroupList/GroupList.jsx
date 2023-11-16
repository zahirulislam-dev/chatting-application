import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import gprofile1 from '../../assets/images/gprofile1.png'
import gprofile2 from '../../assets/images/gprofile2.png'
import gprofile3 from '../../assets/images/gprofile3.png'
import {FiSearch} from 'react-icons/fi'

const GroupList = () => {
  return (
    <div className='bg-white ml-[43px] mb-[43px]'>
        {/* <div className='flex items-center bg-white rounded-[20px] shadow border-2 py-[18px] px-[20px] mb-[43px]'>
           <FiSearch className='w-[20px] h-[20px] mr-[36px]'/>
           <input type="search" placeholder='Search' className='outline-none mr-[60px] placeholder:font-pops placeholder:font-medium placeholder:text-[16px] placeholder:text-[#rgba(61, 61, 61, 0.35)]'/>
           <BsThreeDotsVertical className='font-pops font-semibold text-[20px] text-primary'/>
        </div> */}
        <div className='shadow p-[15px] rounded-[20px] h-[451px] overflow-hidden overflow-y-scroll'>
        <div className='flex justify-between'>
        <h2 className='font-pops font-semibold text-[20px] text-[#000]'>Group List</h2>
        <BsThreeDotsVertical className='font-pops font-semibold text-[20px] text-primary'/>
        </div>
            <div className='flex items-center justify-between mt-[17px] border-b-2 mb-[14px]'>
                <div className='flex items-center'> 
                    <img src={gprofile1} alt="" className='mb-[10px] mr-[8px]'/>
                    <div>
                    <p className='font-pops font-semibold text-[18px] text-[#000]'>Friends Reunion</p>
                    <p className='font-pops font-medium text-[14px] text-[#000]'>Hi Guys, Wassup!</p>
                </div>
                </div>
                <div className='bg-primary py-[2px] px-[22px] rounded'>
                    <button className='font-pops font-semibold text-[20px] text-[#fff]'>Join</button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px] border-b-2 mb-[14px]'>
                <div className='flex items-center'> 
                    <img src={gprofile2} alt="" className='mb-[10px] mr-[8px]'/>
                    <div className=''>
                        <p className='font-pops font-semibold text-[18px] text-[#000]'>Friends Forever</p>
                        <p className='font-pops font-medium text-[14px] text-[#000]'>Good to see you.</p>
                    </div>
                </div>
                <div className='bg-primary py-[2px] px-[22px] rounded'>
                    <button className='font-pops font-semibold text-[20px] text-[#fff]'>Join</button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px] border-b-2 mb-[14px]'>
                <div className='flex items-center'> 
                    <img src={gprofile3} alt="" className='mb-[10px] mr-[8px]'/>
                    <div>
                        <p className='font-pops font-semibold text-[18px] text-[#000]'>Crazy Cousins</p>
                        <p className='font-pops font-medium text-[14px] text-[#000]'>What plans today?</p>
                    </div>
                </div>
                <div className='bg-primary py-[2px] px-[22px] rounded'>
                    <button className='font-pops font-semibold text-[20px] text-[#fff]'>Join</button>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px]'>
                <div className='flex items-center'> 
                    <img src={gprofile3} alt="" className='mb-[10px] mr-[8px]'/>
                    <div>
                        <p className='font-pops font-semibold text-[18px] text-[#000]'>Crazy Cousins</p>
                        <p className='font-pops font-medium text-[14px] text-[#000]'>What plans today?</p>
                    </div>
                </div>
                <div className='bg-primary py-[2px] px-[22px] rounded'>
                    <button className='font-pops font-semibold text-[20px] text-[#fff]'>Join</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroupList