import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"
import { AiFillDelete } from 'react-icons/ai'
import { motion } from "motion/react"


const LatestTasks = () => {
    const { tasks, setTasks } = useContext(TaskContext)

    const TaskDelete = (id) => {
        const c = confirm("Do you really want to delete the task?")
        if (c) {
            const newTasks = tasks.filter((task) => task.id !== id)
            setTasks(newTasks)
        }
    }


    return (
        <div className='mt-6 ml-14 text-white'>

            <h2 className='text-3xl font-semibold text-shadow-lg text-shadow-gray-800'>Your Latest Tasks</h2>

            <div className={`flex ${tasks.lenth == 0 ? "" : "md:ml-10"} flex-col gap-4 mt-7`}>
                {tasks.length == 0 && <div className='text-lg text-center'>No Tasks To Display</div>}
                {tasks.slice(0, 3).map((task) => {
                    return (
                        <motion.div
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            key={task.id}
                            className='md:w-[60%] w-[90%] p-3 px-4 rounded-2xl hover:bg-slate-700 bg-slate-800 border border-slate-700 flex justify-between'>
                            <h2 className='text-xl'>{task.task}</h2>
                            <button className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer" onClick={() => TaskDelete(task.id)}>{<AiFillDelete />}</button>
                        </motion.div>
                    )
                })}
            </div>

        </div>
    )
}

export default LatestTasks