import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewClientDetails from './pages/ViewClientDetails';
import ClientList from './pages/ClientList';
import EditClient from './pages/EditClient';
import AddClient from './pages/AddClient';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<ViewClientDetails/>}/>
<Route path='/clientList' element={<ClientList/>}/>
<Route path='/editClient' element={<EditClient/>}/>
<Route path='/addClient' element={<AddClient/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App