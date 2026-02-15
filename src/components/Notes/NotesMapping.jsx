import { useContext, useState } from "react"
import { NotesContext } from "../../context/NotesContext"
import { AiFillDelete } from 'react-icons/ai';
import { BiCopy, BiSave } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';


const NotesMapping = () => {
    const { notes, setNotes } = useContext(NotesContext)

    const [editTitle, setEditTitle] = useState("")
    const [editDescription, setEditDescription] = useState("")

    const [editingId, setEditingId] = useState(null)

    const handleDelete = (id) => {
        const c = confirm("Do you really want to delete the Note?")
        if (c) {
            const newNotes = notes.filter((note) => note.id !== id)
            setNotes(newNotes)
        }
    }

    const handleEdit = (id) => {
        const item = notes.filter((note) => note.id == id)
        setEditTitle(item[0].title)
        setEditDescription(item[0].noteDescription)
        setEditingId(id)
    }

    const handleCancel = () => {
        setEditingId(null)
    }

    const handleSave = (id) => {
        setNotes(notes.map((item) => {
            return item.id == id ? { ...item, title: editTitle, noteDescription: editDescription } : item
        }))

        setEditingId(null)
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className='w-[90%] md:w-1/2 flex flex-col mt-20 md:mt-0'>
            <h1 className='text-3xl text-center font-bold'>Your Notes</h1>
            <div className="ml-4 flex mt-7 justify-center flex-wrap gap-3">
                {notes.length === 0 && <div>No Notes to display</div>}
                {notes.map((note) => {
                    return (
                        <div key={note.id} className="bg-[#141d34] rounded-2xl shadow-md hover:bg-slate-800 transition shadow-black hover:shadow-lg hover:shadow-black/85 flex items-center flex-col justify-between gap-14 w-[40%] p-3">
                            <div className="flex flex-col gap-3">
                                {editingId !== note.id && <h3 className="text-2xl">{note.title}</h3>}
                                {editingId !== note.id && <p className="text-sm">{note.noteDescription}</p>}
                                {editingId == note.id && <input className="outline-none text-xl" placeholder="Enter Edit Title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} type="text" />}
                                {editingId == note.id && <input className="outline-none text-sm" placeholder="Enter Edit Description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} type="text" />}
                            </div>
                            <div className="flex gap-4">
                                {note.id !== editingId && <button onClick={() => handleEdit(note.id)} className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer">{<FaEdit />}</button>}
                                {note.id !== editingId && <button onClick={() => handleDelete(note.id)} className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer">{<AiFillDelete />}</button>}
                                {note.id == editingId && <button onClick={() => handleSave(note.id)} className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer">{<BiSave />}</button>}
                                {note.id == editingId && <button onClick={handleCancel} className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer">{<GiCancel />}</button>}
                                <button onClick={handleCopy(note.noteDescription)} className="bg-gray-900 shadow shadow-white/25 border border-gray-600 hover:bg-gray-800 hover:shadow-white/65 p-3 rounded-2xl cursor-pointer">{<BiCopy />}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotesMapping