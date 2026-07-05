import { useState } from 'react'
import './App.css'
import Sidebar from './component/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import History from './component/history/History'
import Admin from './component/admin/Admin'
import Login from './component/login/Login'

function App() {

  return (
    <div className='App'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
