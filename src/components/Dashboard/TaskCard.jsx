import React from 'react'
import { motion } from 'motion/react'

const TaskCard = ({ value, title, color }) => {
    return (
        <motion.div
            drag
            whileDrag={{ scale: 1.09 }}
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            whileHover={{
                scale: 1.07,
                rotateX: 13,
                rotateY:23,
                transition: { duration: .2 }
            }}
            style={{ perspective: 1000 }}
            transition={{ duration: 0.5 }}
            className={`bg-slate-800 ${color} border border-slate-700 shadow-xl hover:shadow-black/80 shadow-black/35 transition h-30 w-[80%] flex items-center gap-3 flex-col justify-center md:w-[80%] p-3 rounded-3xl`}>
            <h2 className="md:text-xl text-3xl font-bold">{title}</h2>
            <h3 className='text-5xl font-bold'>{value}</h3>
        </motion.div>
    )
}

export default TaskCard