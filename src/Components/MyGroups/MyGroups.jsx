import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import fprofile1 from '../../assets/images/fprofile1.png'
import fprofile2 from '../../assets/images/fprofile2.png'
import fprofile3 from '../../assets/images/fprofile3.png'
import fprofile4 from '../../assets/images/fprofile4.png'

const MyGroups = () => {
    return (
        <div className='h-[451px] shadow rounded-[20px] p-[15px] ml-[22px] overflow-hidden overflow-y-scroll'>
            <div className='flex justify-between'>
                <h2 className='font-pops font-semibold text-[20px] text-[#000]'>My Groups</h2>
                <BsThreeDotsVertical className='font-pops font-semibold text-[20px] text-primary' />
            </div>
            <div className='flex items-center justify-between mt-[35px] border-b-2 mb-[17px]'>
                <div className='flex items-center'>
                    <img src={fprofile1} alt="" className='mb-[10px] mr-[6px]' />
                    <div>
                        <p className='font-pops font-semibold text-[14px] text-[#000]'>Raghav</p>
                        <p className='font-pops font-medium text-[12px] text-[#000]'>Dinner?</p>
                    </div>
                </div>
                <div className='bg-white'>
                    <p className='font-pops font-medium text-[10px] text-[#000]'>Today, 8:56pm</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px] border-b-2 mb-[17px]'>
                <div className='flex items-center'>
                    <img src={fprofile2} alt="" className='mb-[10px] mr-[6px]' />
                    <div>
                        <p className='font-pops font-semibold text-[14px] text-[#000]'>Swathi</p>
                        <p className='font-pops font-medium text-[12px] text-[#000]'>Sure!</p>
                    </div>
                </div>
                <div className='bg-white'>
                    <p className='font-pops font-medium text-[10px] text-[#000]'>Today, 2:31pm</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px] border-b-2 mb-[17px]'>
                <div className='flex items-center'>
                    <img src={fprofile3} alt="" className='mb-[10px] mr-[6px]' />
                    <div>
                        <p className='font-pops font-semibold text-[14px] text-[#000]'>Kiran</p>
                        <p className='font-pops font-medium text-[12px] text-[#000]'>Hi.....</p>
                    </div>
                </div>
                <div className='bg-white'>
                    <p className='font-pops font-medium text-[10px] text-[#000]'>Yesterday, 6:22pm</p>
                </div>
            </div>
            <div className='flex items-center justify-between mt-[17px] mb-[17px]'>
                <div className='flex items-center'>
                    <img src={fprofile4} alt="" className='mb-[10px] mr-[6px]' />
                    <div>
                        <p className='font-pops font-semibold text-[14px] text-[#000]'>Tejeshwini C</p>
                        <p className='font-pops font-medium text-[12px] text-[#000]'>I will call him today.</p>
                    </div>
                </div>
                <div className='bg-white'>
                    <p className='font-pops font-medium text-[10px] text-[#000]'>Today, 12:22pm</p>
                </div>
            </div>
        </div>
    )
}

export default MyGroups