import React, { useEffect, useState } from 'react'
import GrpCard from './GrpCard'
import NotesCard from './NotesCard'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import PocketNotes from './PocketNotes';

function Notespage({ openGrp, setOpenGrp }) {
    const [notes, setNotes] = useState('')
    const [noteOp, setNoteOp] = useState()
    const [grp, setGrp] = useState()

    const setGroup = async () => {
        if (!openGrp) return
        try {
            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URI}/group/${openGrp}`)
            setGrp(response.data)
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const createNote = async () => {
        if(!notes.trim()) return
        try {
            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URI}/notes`, {
                content: notes,
                group: openGrp
            })
        }
        catch (error) {
            console.log(error)
        }
    }


    function returnDateAndTime(dateString) {
        var date = new Date(dateString);

        const dayWithMonthWithYear =
            date.getDate() +
            " " +
            date.toLocaleString("default", { month: "long" }).slice(0, 3) +
            " " +
            date.getFullYear();

        const time = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });

        return { dayWithMonthWithYear, time };
    }

    const getNote = async () => {
        if (!openGrp) return
        try {

            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URI}/notes/group/${openGrp}`)
            setNoteOp(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNote()
        setGroup()
    }, [notes, openGrp]
    )


    return (
        <>
            {grp ?
                <div className=' bg-[#DAE5F5] w-full'>

                    <div className={` bg-[${grp.color}] h-14 text-white w-full p-2`}>
                        <GrpCard name={grp.name} />
                    </div>
                    <div className=' overflow-y-scroll h-2/3 no-scrollbar'>

                        {
                            noteOp && noteOp.map((note, index) => {
                                const time = returnDateAndTime(note.createdAt).time
                                const date = returnDateAndTime(note.createdAt).dayWithMonthWithYear
                                return (
                                    <NotesCard key={index} content={note.content} date={date} time={time} />
                                )
                            })
                        }

                    </div>
                    <div className={` bg-[${grp.color}]  h-40 flex justify-center items-center p-2 `}>
                        <textarea
                            placeholder='Enter your text here...........'
                            className=' p-1 rounded-md focus:outline-none  w-full h-full'
                            value={notes}
                            onChange={(e) => {
                                setNotes(e.target.value)
                            }}
                        ></textarea>
                    </div>
                    <IoSend className={notes.trim() ? 'text-4xl text-[#001F8B]  absolute bottom-1 right-5' : 'text-4xl text-[#ABABAB]  absolute bottom-1 right-5'}
                        onClick={
                            () => {
                                createNote()
                                grp.notes.push(notes)
                                setNotes('')

                            }
                        } />
                </div> : <PocketNotes />}
        </>
    )
}

export default Notespage