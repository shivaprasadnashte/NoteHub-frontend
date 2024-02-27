import React from 'react'
import Cover from '../../public/images/cover.png'
import { IoMdLock } from "react-icons/io";

function PocketNotes() {
    return (
        <>
            <div className='bg-[#DAE5F5] w-full flex-col  flex justify-between   '>
                <div className=' flex justify-center  flex-col items-center'>
                    <img src={Cover} alt="." className=' w-[626px] h-[313px] ' />
                    <div className=' text-2xl  font-bold'>
                        Pocket Notes
                    </div>
                    <div className=' text-sm text-center  w-[626px]'>
                        Send and receive messages without keeping your phone online.
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                    </div>
                </div>
                <div className=' flex justify-center items-center  '>
                    <IoMdLock className='text-xl' />
                    <p>end-to-end encrypted</p>
                </div>
            </div>
        </>
    )
}

export default PocketNotes