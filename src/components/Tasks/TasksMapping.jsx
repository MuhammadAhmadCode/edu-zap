import { useState, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext';
import { AiFillDelete } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { GiCancel, GiThumbUp } from 'react-icons/gi';





const TasksMapping = () => {

  const [editingID, setEditingId] = useState(null)
  const [edit, setEdit] = useState("")
  const [showCompleted, setShowCompleted] = useState(true)
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex((task) => {
      return task.id == id
    })

    let newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }


  const TaskEdit = (id) => {
    const task = tasks.find((item) => {
      return item.id == id
    })
    setEdit(task.task)
    setEditingId(id)
  }

   const TaskDelete = (id) => {
        const c = confirm("Do you really want to delete the task?")
        if (c) {
            const newTasks = tasks.filter((task) => task.id !== id)
            setTasks(newTasks)
        }
    }

  const handleCancel = () => {
    setEdit("")
    setEditingId(null)
  }



  const handleSave = (id) => {
    setTasks(tasks.map((item) =>
      item.id == id ? { ...item, task: edit } : item
    ))

    setEditingId(null)
  }

  const handleKeyDownSave = (e, id) => {
    if (e.key === "Enter" && edit.trim().length > 3) {
      handleSave(id)
    }
  }

  const handleCompleteCheckbox = () => {
    setShowCompleted(!showCompleted)
  }

  return (
    <div className='md:w-1/2 w-[90%] pb-8  flex gap-8 justify-self-center flex-col mt-9 '>

      <div className='ml-4 text-white flex gap-4'>
        <input checked={showCompleted} onChange={handleCompleteCheckbox} className='justify-self-start' type="checkbox" name="finished" id="" />
        <label className='text-md font-semibold' htmlFor="fiished">Show Completed</label>
      </div>

      {tasks.length === 0 && <div className='text-center text-white text-xl'>No Tasks To show</div>}

      {tasks.map((task) => {
        return (showCompleted || !task.completed) && (
          <div key={task.id} className='bg-[#191928] hover:bg-[#212131] hover:shadow hover:shadow-gray-600 shadow shadow-gray-500 border border-slate-800 flex items-center flex-wrap gap-3 md:flex-nowrap justify-between p-3  rounded-2xl text-white'>

            <div className='flex gap-3 justify-center items-center'>

              <input checked={task.completed} onChange={handleCheckBox} type="checkbox" name={task.id} />

              {editingID == task.id && <input onKeyDown={(e) => handleKeyDownSave(e, task.id)} className='text-lg w-full outline-none font-bold"' value={edit} onChange={(e) => setEdit(e.target.value)} type='text' />}

              {editingID !== task.id && <div className={task.completed ? "line-through flex items-center md:gap-2 gap-1 text-wrap text-lg font-semibold" : "text-lg font-semibold text-wrap"}>{task.task}{task.completed ? <GiThumbUp className='md:text-2xl text-xl' /> : ""}</div>}

            </div>

            <div className='flex gap-3'>
              {editingID !== task.id && <button className='bg-blue-950 hover:bg-blue-900 p-2 px-3 rounded-xl cursor-pointer' onClick={() => TaskEdit(task.id)}>{<FaEdit />}</button>}

              {editingID !== task.id && <button className='bg-blue-950 hover:bg-blue-900 p-2 rounded-xl cursor-pointer' onClick={() => TaskDelete(task.id)}>{<AiFillDelete />}</button>}

              {editingID == task.id && <button className='bg-blue-950 hover:bg-blue-900 p-2 rounded-xl cursor-pointer' onClick={() => handleCancel(task.id)}>{<GiCancel />}</button>}

              {editingID == task.id && <button disabled={edit.trim().length <= 4} className='bg-blue-900 p-2 rounded-xl cursor-pointer' onClick={() => handleSave(task.id)}>{<BiSave />}</button>}
            </div>

          </div>
        )

      })}

    </div>
  )
}

export default TasksMapping