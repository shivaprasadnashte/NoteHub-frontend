import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

function Models({ open, setOpen}) {


    return (
        <>
            <Modal open={open} onClose={
                () => setOpen(false)
            } >
                <Box position={'absolute'} top="45%" left="40%" >
                    <Typography >
                        <div className=' bg-white h-44 w-96 flex flex-col justify-center  gap-3 p-2'>
                            <div className=' font-bold'>
                                Create New group
                            </div>
                            <div className=' flex w-full gap-5'>
                                <div>Group Name</div>
                                <input
                                    type="text"
                                    placeholder='Enter group name'
                                    className=' border border-gray-300 focus:outline-none p-1 rounded-full' />
                            </div>
                            <div className=' flex gap-5' >
                                <div>Choose colour</div>
                                <div className=' flex gap-1'>
                                    <div>
                                        <div className=' bg-[#B38BFA] h-6 w-6  rounded-full'></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#FF79F2] h-6 w-6  rounded-full'></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#43E6FC] h-6 w-6  rounded-full'></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#F19576] h-6 w-6  rounded-full'></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#0047FF] h-6 w-6  rounded-full'></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#6691FF] h-6 w-6  rounded-full'></div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-end'>
                                <button
                                    className=' bg-[#001F8B] text-white px-6 rounded-xl'>Create</button>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>

        </>
    )
}

export default Models
