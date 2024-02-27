import React from 'react'

function GrpCard({ name, color }) {
  return (
    <>
      <div className=' flex gap-3 items-center justify-start  '>

        <div className={` flex justify-center items-center text-white bg-[${color}] font-bold w-10 h-10 rounded-full`}>
          MN
        </div>
        <div>
          {name}
        </div>
      </div>
    </>)
}

export default GrpCard 