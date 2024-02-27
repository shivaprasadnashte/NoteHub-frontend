import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import axios from 'axios';

function NotesCard({ content, date, time}) {
   
    return (
        <>
            <div className=' bg-white m-4 h-40 justify-between  pb-0 p-5 shadow-lg flex flex-col'>
                <div className=' h-44  overflow-y-auto no-scrollbar'>
                    {content}

                </div>
                <div className=' flex items-center gap-2 w-full py-1  justify-end '>
                    <div>{ date}</div>
                    <GoDotFill />
                    <p>{time}</p>
                </div>
            </div>

        </>
    )
}

export default NotesCard