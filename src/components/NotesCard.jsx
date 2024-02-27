import React from 'react'
import { GoDotFill } from "react-icons/go";

function NotesCard() {
    return (
        <>
            <div className=' bg-white m-4 h-40 justify-between  pb-0 p-5 shadow-lg flex flex-col'>
                <div className=' h-44  overflow-y-auto no-scrollbar'>
                    Another productive way to use this tool to begin a daily
                    writing routine. One way is to generate a random paragraph
                    Another productive way to use this tool to begin a daily
                    writing routine. One way is to generate a random paragraph
                    with the intention to try to rewrite it while still keeping the original
                    meaning. The purpose here is to just get the writing started so that when
                    the writer goes onto their day's writing projects, words are already flowing from their fingers.
                    re already flowing from their fingers.

                </div>
                <div className=' flex items-center gap-2 w-full py-1  justify-end '>
                    <div>9 Mar 2023</div>
                    <GoDotFill />
                    <p>10:10 AM</p>
                </div>
            </div>

        </>
    )
}

export default NotesCard