import React from 'react'

const SkillComponent = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-lime-300 p-10 rounded-full shadow-xl shadow-slate-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        <div className="text-2xl">{props.icon}</div>
        <br/><br/>
        <div className=" text-black font-bold">{props.skill}</div>
    </div>
  )
}

export default SkillComponent