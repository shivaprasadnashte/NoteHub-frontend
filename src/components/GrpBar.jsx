import React, { useEffect, useState } from 'react'
import GrpCard from './GrpCard'
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

function GrpBar({ open, setOpen, openGrp, setOpenGrp}) {
    const [grp, setGrp] = useState([])


    useEffect(() => {

        axios.get(`${import.meta.env.VITE_PUBLIC_API_URI}/group`)
            .then((res) => {
                setGrp(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []
    )



    return (

        <>
            <div className=' px-6  flex flex-col  w-1/4  relative '>
                <div className=' px-8 text-2xl bg-transparent '>
                    Pocket Notes
                </div>
                <div className=' flex flex-col gap-5   no-scrollbar  overflow-y-scroll   mt-5'>
                    {grp.length > 0 &&
                        grp.map((grp, index) => {
                             
                            return (
                                <GrpCard key={index} 
                                name={grp.name} 
                                color={grp.color} 
                                id={grp._id} 
                                openGrp={openGrp}
                                setOpenGrp={setOpenGrp}/>
                            )
                        })
                    }

                    <div
                        className=' bottom-4  right-4 absolute text-white bg-[#16008B] w-12 h-12 rounded-full flex justify-center items-center'
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