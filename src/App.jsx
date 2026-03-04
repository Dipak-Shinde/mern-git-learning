import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewClientDetails from './pages/ViewClientDetails';
import ClientList from './pages/ClientList';
import EditClient from './pages/EditClient';
import AddClient from './pages/AddClient';
import Git from './pages/git';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<ViewClientDetails/>}/>
<Route path='/clientList' element={<ClientList/>}/>
<Route path='/editClient' element={<EditClient/>}/>
<Route path='/addClient' element={<AddClient/>}/>
<Route path='/git' element={<Git/>}/>
<Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App