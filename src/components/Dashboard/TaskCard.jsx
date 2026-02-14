import React from 'react'

const TaskCard = ({value,title,color}) => {
    return (
        <div className={`bg-slate-800 ${color} border border-slate-700 shadow-xl hover:shadow-black/80 shadow-black/35 transition h-30 w-[80%] flex items-center gap-3 flex-col justify-center md:w-[80%] p-3 rounded-3xl`}>
            <h2 className="md:text-xl text-3xl font-bold">{title}</h2>
            <h3 className='text-5xl font-bold'>{value}</h3>
        </div>
    )
}

export default TaskCard