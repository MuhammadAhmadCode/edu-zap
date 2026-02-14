import React from 'react'
import NotesMapping from '../components/Notes/NotesMapping'
import NotesAdding from '../components/Notes/NotesAdding'

const Notes = () => {
  
  return (
    <div className='w-full flex text-white flex-col justify-center items-center md:flex-row p-7 gap-5'>
      <NotesAdding />
      <NotesMapping />
    </div>
  )
}

export default Notes