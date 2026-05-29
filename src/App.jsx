import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Topic-14 React Routing/components/Header'


const App = () => {

  

  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
