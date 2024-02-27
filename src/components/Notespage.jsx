import React, { useState } from 'react'
import GrpCard from './GrpCard'
import NotesCard from './NotesCard'
import { IoSend } from "react-icons/io5";

function Notespage() {
    const [notes, setNotes] = useState()

    return (
        <>
            <div className=' bg-[#DAE5F5] w-full'>

                <div className=' bg-[#001F8B] h-14 text-white w-full p-2'>
                    <GrpCard name={"My Notes"} />
                </div>
                <div className=' overflow-y-scroll h-2/3 no-scrollbar'>
                    <NotesCard />
                    <NotesCard />
                    <NotesCard />
                    <NotesCard />
                    <NotesCard />
                    <NotesCard />
                    <NotesCard />
                </div>
                <div className=' bg-[#001F8B]  h-40 flex justify-center items-center p-2 '>
                    <textarea 
                    placeholder='Enter your text here...........'
                     className=' p-1 rounded-md focus:outline-none  w-full h-full'
                     value={notes}
                     onChange={(e) => {
                        setNotes(e.target.value)
                     }  }
                     ></textarea>
                </div>
                <IoSend className={notes ? 'text-4xl text-[#001F8B]  absolute bottom-1 right-5' : 'text-4xl text-[#ABABAB]  absolute bottom-1 right-5'}
                onClick={
                    () => {
                        setNotes('')
                    }
                } />
            </div>
        </>
    )
}

export default Notespage