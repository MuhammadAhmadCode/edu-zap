import React from 'react'

const TaskCard = ({value,title,color}) => {
    return (
        <div className={`${color} drop-shadow-lg drop-shadow-gray-400 h-30 w-[80%] flex items-center gap-3 flex-col justify-center md:w-[70%] p-3 rounded-3xl`}>
            <h2 className='md:text-xl text-3xl font-bold'>{title}</h2>
            <h3 className='md:text-3xl text-4xl font-bold'>{value}</h3>
        </div>
    )
}

export default TaskCard