import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import TinderCards from './Components/TinderCards'
import SwipeButtons from './Components/SwipeButtons'
import './App.css'
import AddUser from './Components/AddUser'

function App() { 

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={[<TinderCards/>, <SwipeButtons/>]}/>
      <Route path='/add' element={<AddUser/>} />
    </Routes>
    </>
  )
}

export default App
