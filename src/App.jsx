import Notes from './pages/Notes'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'



const App = () => {

  return (
    <div className='w-full pb-13 min-h-screen bg-blue-950'>
     <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App