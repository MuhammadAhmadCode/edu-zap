import Notes from './pages/Notes'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'



const App = () => {

  return (
    <div className='w-full min-h-screen bg-blue-950'>
     <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App