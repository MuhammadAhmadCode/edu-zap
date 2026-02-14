import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from '../components/Dashboard/TaskCard'
import TaskAddition from '../components/Tasks/TaskAddition'
import LatestTasks from '../components/Dashboard/LatestTasks'




const Dashboard = () => {
  const { tasks, setTasks } = useContext(TaskContext)

  const totalTasks = tasks.length
  const CompletedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - CompletedTasks

  const TaskDelete = (id) => {
    const c = confirm("Do you really want to delete the task?")
    if (c) {
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
    }
  }

  return (
    <>
      <div className='mt-7 pb-6'>
        <h1 className='text-center text-white text-3xl font-bold'>Your Tasks Info</h1>
        <div className='text-white gap-6 mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center'>
          <TaskCard value={totalTasks} color={"bg-blue-900"} title={"Total Tasks"} />
          <TaskCard value={CompletedTasks} color={"bg-green-700"} title={"Completed Tasks"} />
          <TaskCard value={pendingTasks} color={"bg-yellow-700"} title={"Pending Tasks"} />
        </div>

        <TaskAddition title={"Add a quick Task"} style={"font-semibold text-2xl"} />

        <LatestTasks />

      </div>
    </>
  )
}

export default Dashboard