import React from 'react'
import NotesMapping from '../components/Notes/NotesMapping'
import NotesAdding from '../components/Notes/NotesAdding'

const Notes = () => {
  
  return (
    <div className='w-full flex text-white flex-col  justify-center md:flex-row p-7 gap-5'>
      <NotesAdding />

      <div className='md:border-r-6 min-h-[75vh] md:border-r-gray-700/90'>
      </div>

      <NotesMapping />
    </div>
  )
}

export default Notes