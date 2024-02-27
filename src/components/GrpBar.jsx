import React, { useState } from 'react'
import GrpCard from './GrpCard'
import { FiPlus } from "react-icons/fi";


function GrpBar({ open, setOpen }) {
    return (

        <>
            <div className=' px-6  flex flex-col  w-1/4  '>
                <div className=' px-8 text-2xl bg-transparent '>
                    Pocket Notes
                </div>
                <div className=' flex flex-col gap-5   no-scrollbar relative overflow-y-scroll   mt-5'>
                    <GrpCard name={"My Notes"} color={"#0047FF"} />
                    <GrpCard name={"My personal grp"} color={"#B38BFA"} />
                    <GrpCard name={"Javascript grp"} color={"#FFC0C0"} />
                    <GrpCard name={"HTML grp"} color={"#43E6FC"} />
                    <GrpCard name={"CSS Notes"} color={"#F19576"} />
                    <GrpCard name={"SQL Notes"} color={"#6691FF"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />
                    <GrpCard name={"Python Notes"} color={"#FF66F0"} />

                    <div
                        className=' bottom-0 left-52 fixed text-white bg-[#16008B] w-12 h-12 rounded-full flex justify-center items-center'
                        onClick={
                            () => setOpen(true)
                        }>
                        <FiPlus className='text-4xl' />
                    </div>

                </div>

            </div>
        </>)
}

export default GrpBar