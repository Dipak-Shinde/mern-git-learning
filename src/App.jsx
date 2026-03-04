import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewClientDetails from './pages/ViewClientDetails';
import ClientList from './pages/ClientList';
import EditClient from './pages/EditClient';
import AddClient from './pages/AddClient';
import Git from './pages/git';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services.jsx'
import DashboardLayout from './componants/layout/Dashboard-layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* all pages use DashboardLayout so they render inside its <Outlet> */}
        <Route element={<DashboardLayout />}> 
          <Route path='/' element={<ViewClientDetails/>}/>
          <Route path='clientList' element={<ClientList/>}/>
          <Route path='editClient' element={<EditClient/>}/>
          <Route path='addClient' element={<AddClient/>}/>
          <Route path='git' element={<Git/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='services' element={<Services/>}/>
          {/* any future pages can be added here as well */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App