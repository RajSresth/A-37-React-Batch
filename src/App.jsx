import React from 'react'
import Header from './Topic-14 React Routing/Header'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div id="app">
      <Header/>

      <Outlet />
    </div>
  )
}

export default App
