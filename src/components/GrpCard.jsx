import React from 'react'

function GrpCard({ name, color, id, openGrp, setOpenGrp }) {
  const nameInitials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <>
      <div className=' flex gap-3 items-center justify-start'
        onClick={
          () => {
            setOpenGrp('')
            setOpenGrp(id)
          }
        }>

        <div className={` flex justify-center items-center text-white bg-[${color}] font-bold w-10 h-10 rounded-full`}>
          {nameInitials}
        </div>
        <div>
          {name}
        </div>
      </div>
    </>)
}

export default GrpCard 