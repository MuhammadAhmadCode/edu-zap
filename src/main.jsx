import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import Notes from './pages/Notes.jsx'
import TaskContextProvider from './context/TaskContextProvider.jsx'


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Dashboard />} />
      <Route path='tasks' element={<Tasks />} />
      <Route path='notes' element={<Notes />} />
    </Route>

  )))

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <TaskContextProvider>
    <RouterProvider router={router} />
  </TaskContextProvider>
  // {/* </StrictMode>, */}
)
