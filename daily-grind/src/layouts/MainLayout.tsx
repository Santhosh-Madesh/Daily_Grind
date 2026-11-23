import { Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout