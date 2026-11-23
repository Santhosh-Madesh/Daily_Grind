import './App.css'

import { Route, Routes } from 'react-router'

import Home from './pages/Home'
import Coffee from './pages/Coffee'
import Contact from './pages/Contact'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App