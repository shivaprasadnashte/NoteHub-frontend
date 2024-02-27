import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

function Models({ open, setOpen }) {

    const [color, setColor] = useState('')
    const [name, setName] = useState('')

    const createGroup = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URI}/group`, {
                name: name,
                color: color
            })
            console.log(response)
            setOpen(false)
            window.location.reload(false)
        }
        catch (error) {
            console.log(error)
        }
    }
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
                                    className=' border border-gray-300 focus:outline-none p-1 rounded-full'
                                    value={name}
                                    onChange={
                                        (e) => setName(e.target.value)
                                    } />
                            </div>
                            <div className=' flex gap-5' >
                                <div>Choose colour</div>
                                <div className=' flex gap-1'>
                                    <div>
                                        <div className=' bg-[#B38BFA] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#B38BFA')
                                            }></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#FF79F2] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#FF79F2')
                                            }></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#43E6FC] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#43E6FC')
                                            }></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#F19576] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#F19576')
                                            }></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#0047FF] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#0047FF')
                                            }></div>
                                    </div>
                                    <div>
                                        <div className=' bg-[#6691FF] h-6 w-6  rounded-full'
                                            onClick={
                                                () => setColor('#6691FF')
                                            }></div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-end'>
                                <button
                                    className=' bg-[#001F8B] text-white px-6 rounded-xl'
                                    onClick={
                                        createGroup
                                    }>Create</button>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>

        </>
    )
}

export default Models
