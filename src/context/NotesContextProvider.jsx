import React, { useEffect, useState } from 'react'
import { NotesContext } from './NotesContext'

const NotesContextProvider = ({ children }) => {
    const[filterText,setFilterText] = useState("")

    const [notes, setNotes] = useState(() => {
        const stored = localStorage.getItem("notes")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem("notes",JSON.stringify(notes))
    }, [notes])
    
    return (
        <NotesContext.Provider value={{notes,setNotes,filterText,setFilterText}}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider