import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from '../components/Dashboard/TaskCard'
import TaskAddition from '../components/Tasks/TaskAddition'
import { AiFillDelete } from 'react-icons/ai'
import TaskDelete from '../Util/TaskDelete'


const Dashboard = () => {
  const { tasks } = useContext(TaskContext)

  const totalTasks = tasks.length
  const CompletedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - CompletedTasks

  console.log(tasks);
  return (
    <>
      <div className='mt-7 pb-6'>
        <h1 className='text-center text-white text-3xl font-bold'>Your Tasks Info</h1>
        <div className='text-white gap-6 mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center'>
          <TaskCard value={totalTasks} color={"bg-blue-900"} title={"Total Tasks"} />
          <TaskCard value={CompletedTasks} color={"bg-green-700"} title={"Completed Tasks"} />
          <TaskCard value={pendingTasks} color={"bg-yellow-700"} title={"Pending Tasks"} />
        </div>

        <div>
          <TaskAddition title={"Add a quick Task"} style={"font-semibold text-2xl"} />
        </div>

        <div className='mt-6 ml-14 text-white'>

          <h2 className='text-3xl font-semibold text-shadow-lg text-shadow-gray-800'>Your Latest Tasks</h2>

          <div className='flex flex-col gap-4 mt-7'>
            {tasks.length == 0 && <div className='text-lg'>No Tasks To Display</div>}
            {tasks.slice(0, 3).map((task) => {
              return (
                <div key={task.id} className='w-[60%] p-3 px-4 rounded-2xl bg-violet-900 flex justify-between'>
                  <h2 className='text-xl'>{task.task}</h2>
                  <button className='bg-blue-900 p-2 rounded-xl cursor-pointer' onClick={() => TaskDelete(task.id)}>{<AiFillDelete />}</button>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard