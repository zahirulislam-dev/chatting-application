import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import fprofile1 from '../../assets/images/fprofile1.png'
import fprofile2 from '../../assets/images/fprofile2.png'
import fprofile3 from '../../assets/images/fprofile3.png'
import fprofile4 from '../../assets/images/fprofile4.png'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux'

const Friends = () => {
    const data = useSelector(state => state.userLoginInfo.userInfo);
    console.log(data);
    const db = getDatabase();
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val());
            })
            setFriendList(arr)
        });
    }, [])

    return (
        <div className='h-[451px] shadow rounded-[20px] p-[15px] ml-[22px] mb-[43px] overflow-hidden overflow-y-scroll'>
            <div className='flex justify-between'>
                <h2 className='font-pops font-semibold text-[20px] text-[#000]'>Friends</h2>
                <BsThreeDotsVertical className='font-pops font-semibold text-[20px] text-primary' />
            </div>
            <div className='mt-[35px]'>
                {
                    friendList.map((item) => (
                        <div className='flex items-center justify-between border-b-2 mb-[17px]'>
                            <div className='flex items-center'>
                                <img src={fprofile1} alt="" className='mb-[10px] mr-[6px]' />
                                <div>
                                    <p className='font-pops font-semibold text-[14px] text-[#000]'>
                                        {
                                            item.receiverid == data.uid ? item.sendername : item.receivername
                                        }
                                    </p>
                                    <p className='font-pops font-medium text-[12px] text-[#000]'>{item.senderid}</p>
                                </div>
                            </div>
                            <div className='bg-white'>
                                <p className='font-pops font-medium text-[10px] text-[#000]'>Today, 8:56pm</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Friends